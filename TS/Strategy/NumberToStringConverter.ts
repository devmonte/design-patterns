import { IConverter } from "./IConverter";

export class NumberToStringConverter implements IConverter
{
    convert(toConvert: number): string {
        return toConvert.toString();
    }
}