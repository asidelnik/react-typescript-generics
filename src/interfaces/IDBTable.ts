export interface IDBTable {
  [key: string]: string | number;
  id: number;
  database_id: number;
  name: string;
  description: string;
}
