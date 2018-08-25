import { IObserver } from "./IObserver";
import { ICryptoCurrency } from "./ICryptoCurrency";

export class Investor implements IObserver
{
    Update(currency: ICryptoCurrency): void
    {
        console.log("Notified about price change. New price: " + currency.price)
    }
}