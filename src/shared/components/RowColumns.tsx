import { useLocation, useNavigate } from "react-router-dom";
import { IRowColumns } from "../../interfaces/IRowColumns";
import { clientRoutes } from "../../constants/routes";

export default function RowColumns({ rowData, columns }: IRowColumns) {
  const navigate = useNavigate();
  const dataRows: Array<string | number> = columns.map(c => rowData[c.name])
  const { pathname } = useLocation();
  const pageName = pathname.split('/')[1];

  function handleRowClick() {
    const path = `/${pageName}/${clientRoutes.details}/${rowData.id}`;
    navigate(path);
  }

  return (
    <>
      <tr onClick={handleRowClick}>
        {dataRows.map((column: number | string, index: number) => {
          return (
            <td key={pageName + '-' + rowData.id + '-' + index} className={index === 0 ? 'table-link' : ''}>
              {column}
            </td>)
        })}
      </tr>
    </>
  )
}