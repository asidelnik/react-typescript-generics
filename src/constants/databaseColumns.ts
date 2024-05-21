import { IDatabase } from '../interfaces/IDatabase';
import { FieldsData } from '../interfaces/IGenericTable';

export const databaseColumns: FieldsData<IDatabase> = {
  id: {
    tableColumn: null,
  },
  name: {
    tableColumn: {
      label: 'Name',
      name: 'name',
      order: 2,
      format: 'string',
      isShown: true,
    },
  },
  url: {
    tableColumn: null,
  },
  username: {
    tableColumn: {
      label: 'Username',
      name: 'username',
      order: 2,
      format: 'string',
      isShown: true,
    },
  },
  password: {
    tableColumn: null,
  },
  type: {
    tableColumn: {
      label: 'Type',
      name: 'type',
      order: 3,
      format: 'string',
      isShown: true,
    },
  },
};
