export interface IValidator {
  pattern: string;
  message: string;
}

export interface IValidation {
  [key: string]: IValidator;
}
