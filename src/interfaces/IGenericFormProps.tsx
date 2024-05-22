import { FieldsData } from "./IGenericFields";
import { IDataUnion } from "./IUnion";


export interface IGenericFormProps {
  fields: FieldsData<IDataUnion>;
  requestUrl: string;
  onSubmitCloseModal: () => void;
}
