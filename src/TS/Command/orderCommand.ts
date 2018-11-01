import { ICommand } from "./iCommand";
import { Cook } from "./cook";

export class OrderCommand implements ICommand
{
    constructor(private _cook: Cook){}

    execute(): void {
        this._cook.cookDish("testDish");
    }
}