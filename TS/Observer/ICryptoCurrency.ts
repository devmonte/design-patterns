import { IObserver } from "./IObserver";

export interface ICryptoCurrency
{
    changePrice(newPrice: number): void;
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify():void;
}