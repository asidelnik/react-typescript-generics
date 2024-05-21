import { baseUrl, serverRoutes } from "../constants/server";
import useServerData from "../custom-hooks/useServerData";
import { IDatabase } from "../types/IDatabase";
import { ServerStatus } from "../enums/ServerStatus";

export default function DatabaseConnectionList() {
  const { serverStatus, data } = useServerData(baseUrl + serverRoutes.databases);
  return (
    <>
      <h3>Database connection list</h3>
      {serverStatus === ServerStatus.Success ? (
        <table>
          <thead>
            <th>Name</th>
            <th>Username</th>
            <th>Type</th>
          </thead>
          <tbody>
            {data.map((item: IDatabase) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.type}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
          <>
          {serverStatus === ServerStatus.Error && <h4>Server error</h4>}
        </>
      )}
    </>
  )
}