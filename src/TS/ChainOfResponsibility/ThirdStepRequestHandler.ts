import {  IRequestHandler } from "./IRequestHandler";

export class ThirdStepRequestHandler implements IRequestHandler
{
    nextHandler: IRequestHandler;    
    
    handle(requestType: string): void {
        if(requestType == 'ThirdRequest')
        {
            console.log('Handle third request!');
        }
        else if(this.nextHandler != null)
        {
            this.nextHandler.handle(requestType);
        }
    }

}