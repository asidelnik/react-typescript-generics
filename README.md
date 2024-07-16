# React Typescript Generic components
- Generic routing, generic tables and generic forms
- Custom Hooks
 
**[Demo site link](https://asidelnik.github.io/react-typescript-generics/#/databases/items)**

## FrontEnd tasks to add a page
1. Add an **interface** with the page data fields (Ex: [IDatabase.ts](https://github.com/asidelnik/react-typescript-generics/blob/b07e5e1f3bad378d2dadf1d7c9c8b8938738e65e/src/interfaces/IDatabase.ts)
2. [IUnion.ts](https://github.com/asidelnik/react-typescript-generics/blob/b07e5e1f3bad378d2dadf1d7c9c8b8938738e65e/src/interfaces/IUnion.ts#L5) - add the interface to the **IDataUnion** interface
3. [pagesMetaData.ts](https://github.com/asidelnik/react-typescript-generics/blob/b07e5e1f3bad378d2dadf1d7c9c8b8938738e65e/src/constants/pagesMetaData.ts#L4) - add a **page object** to the **pagesMetaData** array

## BackEnd tasks to add a page
- Real site - add a server endpoint & DB data.
- Demo project - add a new data array per page to the JSON Server [db.json file](https://github.com/asidelnik/react-typescript-generics/blob/b07e5e1f3bad378d2dadf1d7c9c8b8938738e65e/fake-server/db.json).

## The magic of Generics
- Each data field in a page is attached meta data that tells the Generic Components about its functionality & design.
- This is configured in the [FieldsData<T> type](https://github.com/asidelnik/react-typescript-generics/blob/b07e5e1f3bad378d2dadf1d7c9c8b8938738e65e/src/interfaces/IGenericFields.ts#L33).

<img width="1602" alt="image" src="https://github.com/asidelnik/react-typescript-generics/assets/10272524/aaa331bc-2b98-42f5-9731-6c29418367c8">
