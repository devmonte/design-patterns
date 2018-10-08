import { EngineState } from "./engineState";
import { Engine } from "./engine";
import { NormalFuelConsumptionState } from "./normalFuelConsumptionState";
import { EcoFuelConsumptionState } from "./ecoFuelConsumptionState";

export class HighFuelConsumptionState extends EngineState
{
    constructor(private _engine: Engine)
    {
        super();
    }

    get stateName(): string
    {
        return 'HighConsumption'
    }

    checkState(): void{
        if(this._actualSpeed < 80)
            this._engine.state = new EcoFuelConsumptionState(this._engine);            
        if(this._actualSpeed < 100)
            this._engine.state = new NormalFuelConsumptionState(this._engine);
        if(this._actualSpeed > 120)
            return;
    }
}