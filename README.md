# React Typescript website
Generic routing, tables & forms. Custom Hooks.

## Links
- [Demo site](https://asidelnik.github.io/react-typescript-generics/#/databases/items)
- [Server for demo site](https://github.com/asidelnik/database-connection-manager-server)

## Dev tasks to add a page:

1. Add an **interface** with the **page's fields** (like IDatabase.ts)
2. IUnion.ts - add the interface to the **IDataUnion** interface
3. pagesMetaData.ts - add a **page object** to the **pagesMetaData** array
4. db.json - add a new property with array of data objects

<img width="1602" alt="image" src="https://github.com/asidelnik/react-typescript-generics/assets/10272524/aaa331bc-2b98-42f5-9731-6c29418367c8">

### Possible improvements:
- [ ] - 1. SSR - implement in project (with json-server?)
- [ ] - 2. TanStack - implement in project
  - [ ] - 2.1. Query
  - [ ] - 2.2. Router
  - [ ] - 2.3. Table
  - [ ] - 2.4. Pagination, filtering, & sorting
  - [ ] - 2.5. Form
