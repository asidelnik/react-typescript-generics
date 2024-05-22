import { useState } from "react";
import useFieldValidate from "../../custom-hooks/useFieldValidate";
import { IGenericFormFieldProps } from "../../interfaces/IGenericFormFieldProps";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function GenericFormField({ field }: IGenericFormFieldProps) {
  const { value, error, handleChange } = useFieldValidate(field);
  const [showPassword, setShowPassword] = useState(false);
  const inputType = field.type === 'password' ? showPassword ? 'text' : 'password' : field.type;

  if (field.type === 'select' && field.options) {
    return (
      <>
        <label htmlFor={field.name}>{field.label}</label>
        <select id={field.name} name={field.name} required={field.required} value={value} onChange={handleChange}>
          {field.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error ? <div className="field-error-message">{error}</div> : <div className="field-error-placeholder"></div>}
      </>
    );
  } else {
    const inputField = <input id={field.name} type={inputType} name={field.name} required={field.required} pattern={field.validator?.pattern} value={value} onChange={handleChange} />
    return (
      <>
        <label htmlFor={field.name}>{field.label}</label>
        {field.type !== 'password' ? inputField : (<>
          <div className='password-field-container'>
            {inputField}
            <button onClick={() => setShowPassword(!showPassword)} className="secondary">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
          </div>
        </>)}
        {error ? <div className="field-error-message">{error}</div> : <div className="field-error-placeholder"></div>}
      </>
    );
  }

}