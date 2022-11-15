export interface CustomError extends Error {
    statusCode: number;
    statusMessage: string;
}
