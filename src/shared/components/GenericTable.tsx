import { ITableColumn } from "../../interfaces/IGenericFields";
import { IGenericTableProps } from "../../interfaces/IGenericTableProps";
import { IDataUnion } from "../../interfaces/IUnion";
import RowColumns from "./RowColumns";

export default function GenericTable({ fields, data }: IGenericTableProps) {
  const columns: ITableColumn[] = Object.values(fields)
    .filter(c => c.tableColumn)
    .map(c => c.tableColumn as ITableColumn)
    .sort((a, b) => a.order - b.order);
  const theads = columns.map(c => c.label);

  return (
    <>
      <table>
        <thead>
          <tr>
            {theads.map(c => <th key={c}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData: IDataUnion) => <RowColumns key={rowData.id} rowData={rowData} columns={columns} />)}
        </tbody>
      </table>
    </>
  );
}
