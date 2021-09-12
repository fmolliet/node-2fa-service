import VerifyRequestBody from "./models/VerifyRequestBody";

class Service {
    
    async generate(body: any) : Promise<object>{
        return {}
    }
    async token(body: any) : Promise<object>{
        return {}
    }
    
    async verify(body: VerifyRequestBody) : Promise<object> {
        return {}
    }

}

export default new Service();