import { Request,Response  } from 'express';
import { VerifyRequest, VerifyResponse } from '../interfaces';

export interface VerifyDto extends Response {
    body: VerifyResponse
}

export interface VerifyForm extends Request {
    body: VerifyRequest
}