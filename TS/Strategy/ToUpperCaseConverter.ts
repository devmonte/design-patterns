import { IConverter } from "./IConverter";

export class ToUpperCaseConverter implements IConverter
{
    convert(toConvert: string): string {
        return toConvert.toLocaleUpperCase();
    }
    
}