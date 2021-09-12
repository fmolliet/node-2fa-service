import { Request } from 'express';
import VerifyRequestBody from '../models/VerifyRequestBody';

interface VerifyDto extends Request {
    body: VerifyRequestBody
}

export default VerifyDto;