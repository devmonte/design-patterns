import { ICommand } from "./ICommand";
import { Camera } from "./Camera";

export class AddFeatureToStreamCommand implements ICommand
{
    private _camera: Camera;

    constructor(camera: Camera)
    {
        this._camera = camera;
    }

    execute(): void {
        throw new Error("Method not implemented.");
    }
    
}