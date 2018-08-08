
export interface IRequestHandler
{
    nextHandler: IRequestHandler 
    handle(resuestType: string): void;
}