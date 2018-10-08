import { EngineState } from "./engineState";
import { Engine } from "./engine";
import { EcoFuelConsumptionState } from "./ecoFuelConsumptionState";
import { HighFuelConsumptionState } from "./highFuelConsumptionState";

export class NormalFuelConsumptionState extends EngineState
{
    constructor(private _engine: Engine)
    {
        super();
    }

    get stateName(): string
    {
        return 'NormalConsumption'
    }

    checkState(): void{
        if(this._actualSpeed < 80)
            this._engine.state = new EcoFuelConsumptionState(this._engine);            
        if(this._actualSpeed < 100)
            return;
        if(this._actualSpeed > 120)
            this._engine.state = new HighFuelConsumptionState(this._engine);
    }
}