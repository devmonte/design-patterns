import { CarConfigurationMemento } from "./CarConfigurationMemento";

export class CarConfiguration {
    private _type: string;
    private _color: string;
    private _power: number;
    private _selfDrivingEnabled: boolean;

    constructor(type: string, color: string, power: number, selfDrivingEnabled: boolean) {
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
        return this.color;
    }

    set color(newColor: string)
    {
        this._color = newColor;
    }

    get power(): number
    {
        return this.power;
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

    saveMemento(): CarConfigurationMemento {
        return new CarConfigurationMemento(this._type, this._color, this._power, this._selfDrivingEnabled);
    }

    restoreMemento(memento: CarConfigurationMemento) {
        this._type = memento.type;
        this._color = memento.color;
        this._power = memento.power;
        this._selfDrivingEnabled = memento.selfDrivingEnabled;
    }
}