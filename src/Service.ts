import { totp, VerifyResult } from 'notp';

import VerifyRequestBody from "./models/VerifyRequestBody";

class Service {
    
    async generate(body: any) : Promise<object>{
        return {}
    }
    async token(body: any) : Promise<object>{
        return {}
    }
    
    async verify(body: VerifyRequestBody ) : Promise<VerifyResult|null> {
        return await Promise.resolve( totp.verify(body.token, body.key))
    }

}

export default new Service();