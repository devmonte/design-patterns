import { IConverter } from "./IConverter";

export class Context
{
    constructor(private converter: IConverter)
    {}

    useConverter(toConvert: any): void
    {
        console.log(this.converter.convert(toConvert));
    }
}