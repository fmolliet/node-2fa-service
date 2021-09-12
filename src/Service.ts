import crypto from "crypto";
import b32 from "thirty-two";
import { totp, TOTPVerifyOpt } from 'notp';

import { 
    GenerateRequest,
    TokenRequest,
    TokenResponse,
    VerifyRequest,
    GenerateResponse,
    VerifyResponse
} from './interfaces';
import { ExceptionHandler } from "winston";

class Service {
    config: { readonly name: string; readonly account: string; };
    
    opts: TOTPVerifyOpt  = {
        window: 30,
    }
    
    constructor(){
        this.config = {
            name: encodeURIComponent("App"),
            account: encodeURIComponent("test"),
          } as const;
    }
    
    async generate( body: GenerateRequest ) : Promise<GenerateResponse>{
        const bin = crypto.randomBytes(20);
        const base32 = b32.encode(bin).toString("utf8").replace(/=/g, ""); 
        
        const secret = base32
            .toLowerCase()
            .replace(/(\w{4})/g, "$1 ")
            .trim()
            .split(" ")
            .join("")
            .toUpperCase();
            
        const query = `?secret=${secret}&issuer=${body.name||this.config.name}`
        const encodedQuery = query.replace('?', '%3F').replace('&', '%26')
        const uri = `otpauth://totp/${body.name||this.config.name}${body.account||this.config.account}`

        
        return {
            secret,
            uri: `${uri}${query}`,
            qr: `https://chart.googleapis.com/chart?chs=166x166&chld=L|0&cht=qr&chl=${uri}${encodedQuery}`
        };
    }
    
    async token(body: TokenRequest) : Promise<TokenResponse>{
        if (!body.secret || !body.secret.length) throw new Error('Nenhuma secret foi recebida');
        const unformatted = body.secret.replace(/\W+/g, "").toUpperCase();
        const bin = b32.decode(unformatted);

        return { token: totp.gen(bin)  }
    }
    
    async verify(body: VerifyRequest ) : Promise<VerifyResponse|null> {
        if (!body.token || !body.token.length) throw new Error('Nenhuma secret foi recebida');
        const unformatted = body.secret.replace(/\W+/g, "").toUpperCase();
        const bin = b32.decode(unformatted);
        
        return await Promise.resolve( 
            totp.verify(
                body.token.replace(/\W+/g, ""),
                bin,
                this.opts
            )
        );
    }

}

export default new Service();