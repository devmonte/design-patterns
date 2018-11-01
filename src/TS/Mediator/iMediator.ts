import { IChatUser } from "./iChatUser";

export interface IChatMediator
{
    addUser(user: IChatUser): void;
    send(message: string): void;
}