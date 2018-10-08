import { EngineState } from "./engineState";
import { Engine } from "./engine";
import { NormalFuelConsumptionState } from "./normalFuelConsumptionState";
import { HighFuelConsumptionState } from "./highFuelConsumptionState";

export class EcoFuelConsumptionState extends EngineState
{
    get stateName(): string
    {
        return 'EcoConsumption'
    }

    constructor(private _engine: Engine) 
    {
        super();
    }
    
    checkState(): void{
        if(this._actualSpeed < 80)
            return;
        if(this._actualSpeed < 100)
            this._engine.state = new NormalFuelConsumptionState(this._engine);
        if(this._actualSpeed > 120)
            this._engine.state = new HighFuelConsumptionState(this._engine);
    }
}