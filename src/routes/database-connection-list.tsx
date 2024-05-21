import { baseUrl, serverRoutes } from "../constants/server";
import useServerData from "../custom-hooks/useServerData";
import { ServerStatus } from "../enums/ServerStatus";
import GenericTable from "../shared/components/GenericTable";
import { databaseColumns } from "../constants/databaseColumns";

export default function DatabaseConnectionList() {
  const { serverStatus, data } = useServerData(baseUrl + serverRoutes.databases);
  return (
    <>
      <h3>Database connection list</h3>
      {serverStatus === ServerStatus.Loading && <h4>Data loading...</h4>}
      {serverStatus === ServerStatus.Success && <GenericTable metaData={databaseColumns} data={data} />}
      {serverStatus === ServerStatus.Error && <h4>Server error</h4>}
    </>
  )
}