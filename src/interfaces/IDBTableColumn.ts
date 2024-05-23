export interface IDBTableColumn {
  [key: string]: string | number;
  id: number;
  table_id: number;
  name: string;
  data_type: string;
  description: string;
}
