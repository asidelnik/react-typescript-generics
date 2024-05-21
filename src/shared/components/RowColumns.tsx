import { IRowColumns } from "../../interfaces/IRowColumns";

export default function RowColumns({ rowData, columns }: IRowColumns) {
  const dataRows: Array<string | number> = columns.map(c => rowData[c.name])
  return (
    <>
      <tr>
        {dataRows.map((column: number | string) => <td key={rowData.id + '-' + column}>{column}</td>)}
      </tr>
    </>
  )
}