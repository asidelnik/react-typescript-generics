import { useState, ChangeEvent } from "react";
import { IFormField } from "../interfaces/IGenericFields";

export default function useFieldValidate(field: IFormField) {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (field.validator) {
      const regex = new RegExp(field.validator.pattern);
      if (!regex.test(value)) {
        setError(field.validator.message);
      } else {
        setError(field.required && value.trim() === '' ? 'Field is required' : '');
      }
    }
  };

  return { value, error, handleChange };
}