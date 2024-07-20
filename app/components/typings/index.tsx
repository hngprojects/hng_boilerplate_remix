import { FormField } from "../constant";

export interface IResult {
  [key: string]: number | undefined;
}

export interface IModifiedResult {
  [key: string]: Array<string>;
}

export interface IFormState {
  [FormField.bio]: string;
}

export interface IFormError {
  [FormField.bio]: string | undefined;
}
