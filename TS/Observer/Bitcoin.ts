import { ISubject } from "./ISubject";
import { IObserver } from "./IObserver";

export class Bitcoin implements ISubject
{
    public price: number;
    private _investors: IObserver[];

    constructor(price: number) 
    {
        this.price = price;
    }

    Notify(): void
    {
        this._investors.forEach(i => i.Update(this));
    }

    Attach(investor: IObserver): void
    {
        this._investors.push(investor);
    }

    Detach(investor: IObserver): void
    {
        //remove given investor from array
    }
}