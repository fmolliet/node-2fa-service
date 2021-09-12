import { Response, Request } from 'express';
import { TokenRequest, TokenResponse } from '../interfaces';

export interface TokenDto extends Response {
    body: TokenResponse
}

export interface TokenForm extends Request {
    body: TokenRequest
}