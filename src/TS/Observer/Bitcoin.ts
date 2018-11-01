import { ICryptoCurrency } from "./ICryptoCurrency";
import { IObserver } from "./IObserver";

export class Bitcoin implements ICryptoCurrency
{
    public price: number;
    private _investors: IObserver[];

    constructor(price: number) 
    {
        this.price = price;
    }

    notify(): void
    {
        this._investors.forEach(i => i.Update(this));
    }

    attach(investor: IObserver): void
    {
        this._investors.push(investor);
    }

    detach(investor: IObserver): void
    {
        //remove given investor from array
    }

    changePrice(newPrice: number)
    {
        this.price = newPrice;
        this.notify;
    }
}