import { IValidator } from './IValidator';

export interface ITableColumn {
  label: string;
  name: string;
  order: number;
  // isSortable: boolean;
  // format: 'string' | 'date' | 'currency' | 'decimal' | 'isActive';
}

export interface IFormField {
  label: string;
  name: string;
  order: number;
  type: 'text' | 'select' | 'password' | 'url';
  required: boolean;
  validator?: IValidator;
  options?: Array<string | number>;
  // value?: string;
}

export interface IItemDetails {
  label: string;
  name: string;
}

export interface IField {
  tableColumn?: ITableColumn;
  formField?: IFormField;
  itemDetails?: IItemDetails;
}

export type FieldsData<T> = {
  [K in keyof T]: IField;
};
