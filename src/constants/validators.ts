import { IValidation } from '../interfaces/IValidator';

export const inputValidation: IValidation = {
  password: {
    pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}', // #G71Cxhd
    message:
      'Password format: at least 8 characters & at least 1 digit, lowercase letter, uppercase letter & special character.',
  },
  english: {
    pattern: '[A-Za-z0-9]+',
    message: 'English letters or numbers only.',
  },
  url: {
    pattern: 'https?://.+',
    message: 'Please enter a correct url.',
  },
};
