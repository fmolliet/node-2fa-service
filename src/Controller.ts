import { Request, Response } from 'express';
import VerifyDto from './dto/VerifyDto';

import _service from './Service';

export default class Controller {
    
    
    async verify(req : VerifyDto, res: Response): Promise<Response>{
        try{
            const validate = await _service.verify(req.body);
            return res.status(200).json(validate)
        }catch (err: any){
            return res.status(400).json({message: err.message ? err.message : err});
        }
    }
    
    async token(req : Request, res: Response): Promise<Response>{
        try{
            const token = await _service.token(req.body); 
            return res.status(200).json(token)
        }catch (err: any ){
            return res.status(400).json(err.message);
        }
    }
    
    async generate(req : Request, res: Response): Promise<Response>{
        try{
            const validate = await _service.generate(req.body);
            return res.status(200).json({})
        }catch (err: any){
            return res.status(400).json({message: err.message ? err.message : err});
        }
    }

}