import { Response, Request } from 'express';
import { GenerateRequest, GenerateResponse } from '../interfaces';

export interface GenerateDto extends Response {
    body: GenerateResponse
}


export interface GenerateForm extends Request {
    body: GenerateRequest
}
