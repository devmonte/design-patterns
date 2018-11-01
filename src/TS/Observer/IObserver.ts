import { ICryptoCurrency } from "./ICryptoCurrency";

export interface IObserver
{
    Update(subject: ICryptoCurrency): void;
}