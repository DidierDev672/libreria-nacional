export interface CustomResponse {
    message: string;
    reason: string;
    statusCode: number;
    data: any | any[];
}