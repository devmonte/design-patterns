import { Vehicle } from "./Vehicle";
import { IVisitor } from "./IVisitor";

export class Vehicles
{
    private vehicles: Vehicle[]

    attach(vehicle: Vehicle) : void
    {
        this.vehicles.push(vehicle);
    }

    accept(visitor: IVisitor) : void
    {
        this.vehicles.forEach(element => {
            element.acceptVisitor(visitor);
        });
    }
}