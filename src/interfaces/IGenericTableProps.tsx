import { FieldsData } from "./IGenericTable";
import { IData, IDataUnion } from "./IUnion";

export interface IGenericTableProps extends IData {
  metaData: FieldsData<IDataUnion>;
}
