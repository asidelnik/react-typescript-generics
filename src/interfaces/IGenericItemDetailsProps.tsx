import { FieldsData } from "./IGenericFields";
import { IDataUnion } from "./IUnion";


export interface IGenericItemDetailsProps {
  fields: FieldsData<IDataUnion>;
  data: IDataUnion;
}
