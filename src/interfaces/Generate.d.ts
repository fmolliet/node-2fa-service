export interface GenerateResponse{
    uri: string,
    secret: string,
    qr: string
}

export interface GenerateRequest{
    name: string,
    account: string,
}