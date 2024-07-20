import { IFormState, IFormError } from "../typings";

export enum FormField {
  bio = "bio",
}

export const defaultFormState: IFormState = {
  [FormField.bio]: "",
};

export const defaultFormError: IFormError = {
  [FormField.bio]: null,
};

export const defaultAlert: { message: string | null; classType?: string } = {
  message: null,
  classType: undefined,
};