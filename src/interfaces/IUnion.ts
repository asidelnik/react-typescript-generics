import { IDatabase } from './IDatabase';

export type IDataUnion = IDatabase; // | IOtherTableInterface

export interface IData {
  data: IDataUnion[];
}
