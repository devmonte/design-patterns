import { IObserver } from "./IObserver";

export interface ISubject
{
    Attach(observer: IObserver): void;
    Detach(observer: IObserver): void;
    Notify():void;
}