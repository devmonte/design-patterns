import {  IRequestHandler } from "./IRequestHandler";

export class SecondStepRequestHandler implements IRequestHandler
{
    nextHandler: IRequestHandler;    
    
    handle(requestType: string): void {
        if(requestType == 'SecondRequest')
        {
            console.log('Handle second request!');
        }
        else if(this.nextHandler != null)
        {
            this.nextHandler.handle(requestType);
        }
    }


}