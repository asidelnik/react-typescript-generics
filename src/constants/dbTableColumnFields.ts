import { IDBTableColumn } from '../interfaces/IDBTableColumn';
import { FieldsData } from '../interfaces/IGenericFields';
import { inputValidation } from './validators';

export const dbTableColumnFields: FieldsData<IDBTableColumn> = {
  id: {
    itemDetails: {
      label: 'Id',
      name: 'id',
    },
  },
  tableId: {
    tableColumn: {
      label: 'Table Id',
      name: 'tableId',
      order: 1,
    },
    formField: {
      label: 'Table Id',
      name: 'tableId',
      order: 1,
      type: 'text',
      required: true,
      validator: inputValidation.number,
    },
    itemDetails: {
      label: 'Table Id',
      name: 'tableId',
    },
  },
  name: {
    tableColumn: {
      label: 'Name',
      name: 'name',
      order: 2,
    },
    formField: {
      label: 'Name',
      name: 'name',
      order: 2,
      type: 'text',
      required: true,
      validator: inputValidation.english,
    },
    itemDetails: {
      label: 'Name',
      name: 'name',
    },
  },
  dataType: {
    tableColumn: {
      label: 'Data Type',
      name: 'dataType',
      order: 3,
    },
    formField: {
      label: 'Data Type',
      name: 'dataType',
      order: 3,
      type: 'select',
      required: true,
      options: ['int', 'bigint', 'datetime', 'varchar', 'text', 'decimal'],
    },
    itemDetails: {
      label: 'Data Type',
      name: 'dataType',
    },
  },
  description: {
    tableColumn: {
      label: 'Description',
      name: 'description',
      order: 4,
    },
    formField: {
      label: 'Description',
      name: 'description',
      order: 4,
      type: 'text',
      required: true,
      validator: inputValidation.english,
    },
    itemDetails: {
      label: 'Description',
      name: 'description',
    },
  },
};
