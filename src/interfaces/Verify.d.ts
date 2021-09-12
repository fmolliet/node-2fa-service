import { VerifyResult } from 'notp';

export interface VerifyRequest {
    token: string
    secret: string
}

export interface VerifyResponse extends VerifyResult{
}