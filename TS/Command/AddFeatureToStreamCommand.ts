import { ICommand } from "./ICommand";
import { ICamera } from "./icamera";

export class AddFeatureToStreamCommand implements ICommand
{
    private _camera: ICamera;

    constructor(camera: ICamera)
    {
        this._camera = camera;
    }

    execute(): void {
        this._camera.addFeature("New super feature!");
    }
}