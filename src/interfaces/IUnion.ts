import { IDatabase } from './IDatabase';
import { IDBTable } from './IDBTable';
import { IDBTableColumn } from './IDBTableColumn';

export type IDataUnion = IDatabase | IDBTable | IDBTableColumn;

export interface IData {
  data: IDataUnion[];
}
