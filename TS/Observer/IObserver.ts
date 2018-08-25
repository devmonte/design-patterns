import { ISubject } from "./ISubject";

export interface IObserver
{
    Update(subject: ISubject): void;
}