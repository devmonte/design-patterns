export interface ICamera
{
    showStream(): string;
    showStreamWithFeatures(): string;
    addFeature(newFeature: string);
}