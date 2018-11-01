export interface IChatUser
{
    send(message: string): void;
    receive(message: string): void;
}