import { Request, Response } from 'express';
import { GenerateDto, GenerateForm } from './dto/GenerateDto';
import { TokenDto, TokenForm } from './dto/TokenDto';
import { VerifyDto, VerifyForm } from './dto/VerifyDto';

import _service from './Service';

export default class Controller {
    
    
    async verify(req : VerifyForm, res: Response): Promise<VerifyDto|Response>{
        
        try{
            const validate = await _service.verify(req.body);
            
            if ( !validate ){
                return res.status(403).json({message: 'Invalid token and secret.'})
            }
            
            return res.status(200).json(validate)
        }catch (err: any){
            return res.status(500).json({message: err.message ? err.message : err});
        }
    }
    
    async token(req : TokenForm, res: Response): Promise<TokenDto|Response>{
        try{
            const token = await _service.token(req.body); 
            return res.status(200).json(token)
        }catch (err: any ){
            return res.status(400).json(err.message);
        }
    }
    
    async generate(req : GenerateForm, res: Response): Promise<GenerateDto|Response>{
        try{
            const result = await _service.generate(req.body);
            return res.status(200).json(result)
        }catch (err: any){
            return res.status(400).json({message: err.message ? err.message : err});
        }
    }

}