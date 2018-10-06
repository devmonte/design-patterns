import { IChatUser } from "./iChatUser";
import { IChatMediator } from "./iMediator";

export class ChatUser implements IChatUser
{
    constructor(private _mediator: IChatMediator, private _userName: string){}

    send(message: string): void {
        this._mediator.send(message);
    }

    receive(message: string): void {
        console.log("User" + this._userName + "received: " + message);
    }

}