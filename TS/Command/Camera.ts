//receiver
export class Camera
{
    stream: string;
    feature: string;
    private _features: string[];

    showStream(): string
    {
        return this.stream + this.feature;
    }

    addFeature(newFeature: string)
    {
        this.feature = newFeature;
    }
}