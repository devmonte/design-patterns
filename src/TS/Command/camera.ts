//receiver
export class Camera
{
    private _stream: string;
    private _features: string[];

    showStream(): string
    {
        return this._stream;
    }

    showStreamWithFeatures(): string
    {
        let streamWithFeatures = "Features: ";    
        this._features.forEach(f => streamWithFeatures + f + " ");
        return streamWithFeatures;
    }

    addFeature(newFeature: string)
    {
        this._features.push(newFeature);
    }
}