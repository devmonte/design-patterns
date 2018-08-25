import { IConverter } from "./IConverter";

export class ToLowerCaseConverter implements IConverter
{
    convert(toConvert: string): string {
        return toConvert.toLocaleLowerCase();
    }
    
}