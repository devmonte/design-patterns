import { IChatMediator } from "./iMediator";
import { IChatUser } from "./iChatUser";

export class ChatMediator implements IChatMediator {
    
    private _users: IChatUser[];
    
    addUser(user: IChatUser): void {
        this._users.push(user);
    } 
    
    send(message: string): void {
        this._users.forEach(user => user.receive(message));
    }
}