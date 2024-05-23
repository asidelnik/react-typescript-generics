import { IDatabase } from '../interfaces/IDatabase';
import { FieldsData } from '../interfaces/IGenericFields';
import { inputValidation } from './validators';

export const databaseFields: FieldsData<IDatabase> = {
  id: {
    itemDetails: {
      label: 'Id',
      name: 'id',
    },
  },
  name: {
    tableColumn: {
      label: 'Name',
      name: 'name',
      order: 1,
    },
    formField: {
      label: 'Name',
      name: 'name',
      order: 1,
      type: 'text',
      required: true,
      validator: inputValidation.english,
    },
    itemDetails: {
      label: 'Name',
      name: 'name',
    },
  },
  url: {
    formField: {
      label: 'Url',
      name: 'url',
      order: 2,
      type: 'url',
      required: true,
      validator: inputValidation.url,
    },
    itemDetails: {
      label: 'Url',
      name: 'url',
    },
  },
  username: {
    tableColumn: {
      label: 'Username',
      name: 'username',
      order: 2,
    },
    formField: {
      label: 'Username',
      name: 'username',
      order: 3,
      type: 'text',
      required: true,
      validator: inputValidation.english,
    },
    itemDetails: {
      label: 'Username',
      name: 'username',
    },
  },
  password: {
    formField: {
      label: 'Password',
      name: 'password',
      order: 4,
      type: 'password',
      required: true,
      validator: inputValidation.password,
    },
  },
  type: {
    tableColumn: {
      label: 'Type',
      name: 'type',
      order: 3,
    },
    formField: {
      label: 'Type',
      name: 'type',
      order: 5,
      type: 'select',
      required: true,
      options: ['Snowflake', 'Trino', 'MySQL'],
    },
    itemDetails: {
      label: 'Type',
      name: 'type',
    },
  },
};