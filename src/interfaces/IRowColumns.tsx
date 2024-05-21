import { ITableColumn } from "./IGenericTable";
import { IDataUnion } from "./IUnion";

export interface IRowColumns {
  rowData: IDataUnion;
  columns: ITableColumn[];
}
