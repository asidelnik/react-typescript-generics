import { useNavigate } from "react-router-dom";
import { IRowColumns } from "../../interfaces/IRowColumns";
import { clientRoutes } from "../../constants/routes";

export default function RowColumns({ rowData, columns }: IRowColumns) {
  const navigate = useNavigate();
  const dataRows: Array<string | number> = columns.map(c => rowData[c.name])

  function handleRowClick() {
    navigate(`${clientRoutes.databaseDetails}/${rowData.id}`);
  }

  return (
    <>
      <tr onClick={handleRowClick}>
        {dataRows.map((column: number | string) => <td key={rowData.id + '-' + column}>{column}</td>)}
      </tr>
    </>
  )
}