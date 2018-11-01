import { IVisitor } from "./IVisitor";
import { Vehicle } from "./Vehicle";

export class PriceVisitor implements IVisitor
{
    visit(vehicle: Vehicle) : void
    {
        vehicle.price *= 2;
    }
}