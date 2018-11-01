export class CarConfigurationMemento
{
    private _type: string;
    private _color: string;
    private _power: number;
    private _selfDrivingEnabled: boolean;

    constructor(type: string, color: string, power: number, selfDrivingEnabled: boolean)
    {
        this._type = type;
        this._color = color;
        this._power = power;
        this._selfDrivingEnabled = selfDrivingEnabled;
    }

    get type(): string {
        return this._type;
    }

    set type(newType: string) {
        this._type = newType;
    }

    get color(): string
    {
        return this._color;
    }

    set color(newColor: string)
    {
        this._color = newColor;
    }

    get power(): number
    {
        return this._power;
    }

    set power(newPower: number)
    {
        this._power = newPower;
    }

    get selfDrivingEnabled(): boolean
    {
        return this._selfDrivingEnabled;
    }
    
    set selfDrivingEnabled(newSelfDrivingEnabled: boolean)
    {
        this._selfDrivingEnabled = newSelfDrivingEnabled;
    }
}