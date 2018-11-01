import { Cook } from "./cook";
import { OrderCommand } from "./orderCommand";

//invoker
export class Waiter{

    constructor(private _cook: Cook){}

    takeOrder(course: string): void
    {
        let order = new OrderCommand(this._cook);
        order.execute()
    }

}