import { Cook } from "./cook";
import { AsianCousineOrderCommand } from "./orderCommand";

//invoker
export class Waiter{

    constructor(private _cook: Cook){}

    takeOrder(dishName: string): void
    {
        let order = new AsianCousineOrderCommand(this._cook, dishName);
        order.execute()
    }
}