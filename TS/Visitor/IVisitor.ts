import { Vehicle } from "./Vehicle";

export interface IVisitor
{
   visit(vehicle: Vehicle) : void
}