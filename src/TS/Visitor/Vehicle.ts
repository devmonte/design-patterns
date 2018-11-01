import { IVisitor } from "./IVisitor";

export class Vehicle
{
    name: string;
    year: number;
    price: number;

    constructor(name: string, year: number, price: number)
    {
        this.name = name;
        this.year = year;
        this.price = price;
    }

    acceptVisitor(visitor: IVisitor)
    {
        visitor.visit(this);
    }
}