export interface ITableColumn {
  label: string;
  name: string;
  order: number;
  // isSortable: boolean;
  format: 'string' | 'date' | 'currency' | 'decimal' | 'isActive';
  isShown: boolean;
}

export interface IField {
  tableColumn: ITableColumn | null;
}

export type FieldsData<T> = {
  [K in keyof T]: IField;
};
