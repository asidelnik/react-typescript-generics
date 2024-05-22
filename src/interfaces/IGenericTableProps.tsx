import { FieldsData } from "./IGenericFields";
import { IData, IDataUnion } from "./IUnion";

export interface IGenericTableProps extends IData {
  fields: FieldsData<IDataUnion>;
}