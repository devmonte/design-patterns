import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

export class Investor implements IObserver
{
    Update(subject: ISubject): void
    {
        console.log("Notified about price change.")
    }
}