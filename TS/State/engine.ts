import { EngineState } from "./engineState";
import { NormalFuelConsumptionState } from "./normalFuelConsumptionState";

//context
export class Engine
{
    private _state: EngineState;

    constructor(private _name: string){
        this._state = new NormalFuelConsumptionState(this);
    }

    get state(): EngineState
    {
        return this._state;
    }

    set state(newState: EngineState)
    {
        this._state = newState;
    }

    changeSpeed(newSpeed: number)
    {
        this._state.changeSpeed(newSpeed);
    }
    
}