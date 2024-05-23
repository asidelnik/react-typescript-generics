export interface IDBTableColumn {
  [key: string]: string | number;
  id: number;
  tableId: number;
  name: string;
  dataType: string;
  description: string;
}

