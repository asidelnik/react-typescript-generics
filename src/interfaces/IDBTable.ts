export interface IDBTable {
  [key: string]: string | number;
  id: number;
  databaseId: number;
  name: string;
  description: string;
}
