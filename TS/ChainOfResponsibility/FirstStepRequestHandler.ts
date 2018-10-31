import {  IRequestHandler } from "./IRequestHandler";

export class FirstStepRequestHandler implements IRequestHandler
{
    nextHandler: IRequestHandler;    
    
    handle(requestType: string): void {
        if(requestType == 'FirstRequest')
        {
            console.log('Handle first request!');
        }
        else if(this.nextHandler != null)
        {
            this.nextHandler.handle(requestType);
        }
    }
}