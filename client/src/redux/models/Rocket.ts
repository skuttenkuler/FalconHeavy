export interface RocketResponse {
    status: "Success" | "error";
    message: string;
    engines: number
}