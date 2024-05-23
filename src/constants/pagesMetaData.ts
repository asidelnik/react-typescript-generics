import { IPageMetaData } from '../interfaces/IPageMetaData';
import { inputValidation } from './validators';

export const pagesMetaData: IPageMetaData[] = [
  {
    name: 'databases',
    itemsLabel: 'Databases',
    detailsLabel: 'Database - details',
    addLabel: 'Add a database',
    getItemsUrl: 'databases/',
    getItemDetailsUrl: 'databases?id=',
    fields: {
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
    },
  },
  {
    name: 'dbTables',
    itemsLabel: 'DB Tables',
    detailsLabel: 'DB Table - details',
    addLabel: 'Add a DB Table',
    getItemsUrl: 'tables/',
    getItemDetailsUrl: 'tables?id=',
    fields: {
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
          type: 'number',
          required: true,
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
    },
  },
  {
    name: 'dbTableColumns',
    itemsLabel: 'Table Columns',
    detailsLabel: 'Table Column - details',
    addLabel: 'Add a Table Column',
    getItemsUrl: 'columns/',
    getItemDetailsUrl: 'columns?id=',
    fields: {
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
          type: 'number',
          required: true,
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
    },
  },
];
