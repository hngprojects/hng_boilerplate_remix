import { IFormState, IFormError } from "../typings";

export enum FormField {
  bio = "bio",
}

export const defaultFormState: IFormState = {
  [FormField.bio]: "",
};

export const defaultFormError: IFormError = {
  [FormField.bio]: undefined,
};

export const defaultAlert: { message: string | undefined; classType?: string } = {
  message: undefined,
  classType: undefined,
};