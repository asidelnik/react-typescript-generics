import { IDBTable } from '../interfaces/IDBTable';
import { FieldsData } from '../interfaces/IGenericFields';
import { inputValidation } from './validators';

export const dbTableFields: FieldsData<IDBTable> = {
  id: {
    itemDetails: {
      label: 'Id',
      name: 'id',
    },
  },
  databaseId: {
    tableColumn: {
      label: 'Database Id',
      name: 'databaseId',
      order: 1,
    },
    formField: {
      label: 'Database Id',
      name: 'databaseId',
      order: 1,
      type: 'text',
      required: true,
      validator: inputValidation.number,
    },
    itemDetails: {
      label: 'Database Id',
      name: 'databaseId',
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
  description: {
    tableColumn: {
      label: 'Description',
      name: 'description',
      order: 3,
    },
    formField: {
      label: 'Description',
      name: 'description',
      order: 3,
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
