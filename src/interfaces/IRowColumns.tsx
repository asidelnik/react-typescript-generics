import { ITableColumn } from "./IGenericFields";
import { IDataUnion } from "./IUnion";

export interface IRowColumns {
  rowData: IDataUnion;
  columns: ITableColumn[];
}
