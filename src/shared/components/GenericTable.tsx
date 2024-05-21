import { ITableColumn } from "../../interfaces/IGenericTable";
import { IGenericTableProps } from "../../interfaces/IGenericTableProps";
import { IDataUnion } from "../../interfaces/IUnion";
import RowColumns from "./RowColumns";

export default function GenericTable({ metaData, data }: IGenericTableProps) {
  const columns: ITableColumn[] = Object.values(metaData).filter(c => c.tableColumn != null).map(c => c.tableColumn as ITableColumn).sort((a, b) => a.order - b.order);
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
