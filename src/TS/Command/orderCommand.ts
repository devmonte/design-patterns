import { ICommand } from "./iCommand";
import { Cook } from "./cook";

export class AsianCousineOrderCommand implements ICommand
{
    constructor(private _cook: Cook, private _dishName: string){}

    execute(): void {
        this._cook.cookDish(this._dishName);
    }
}