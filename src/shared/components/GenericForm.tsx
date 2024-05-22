import { useEffect } from "react";
import usePostServerData from "../../custom-hooks/usePostServerData";
import { ServerStatus } from "../../enums/ServerStatus";
import { IGenericFormProps } from "../../interfaces/IGenericFormProps";
import { IFormField } from "../../interfaces/IGenericFields";
import GenericFormField from "./GenericFormField";

export default function GenericForm({ fields, requestUrl, onSubmitCloseModal }: IGenericFormProps) {
  const formFields: IFormField[] = Object.values(fields)
    .filter(c => c.formField)
    .map(c => c.formField as IFormField)
    .sort((a, b) => a.order - b.order);

  const { serverStatus, onSubmitHandler } = usePostServerData(formFields, requestUrl);

  useEffect(() => {
    if (serverStatus === ServerStatus.Success) {
      onSubmitCloseModal();
    }
  }, [serverStatus])

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        {formFields.map((field: IFormField) => <GenericFormField key={field.name} field={field} />)}
        <button type="submit" className="primary">Submit</button>
        {serverStatus === ServerStatus.Error && <p>Server error.</p>}
      </form>
    </>
  )
}