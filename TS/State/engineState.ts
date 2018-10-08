//state
export abstract class EngineState
{
    protected _actualSpeed: number;
    get actualSpeed(): number{
        return this._actualSpeed;
    }

    abstract get stateName(): string;
    abstract checkState();

    changeSpeed(newSpeed: number) {
        this._actualSpeed = newSpeed
        this.checkState();
    }
}