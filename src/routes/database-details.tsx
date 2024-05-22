import { useParams } from "react-router-dom";
import { IDatabase } from "../interfaces/IDatabase";
import { baseUrl, serverRoutes } from "../constants/routes";
import { useEffect } from "react";
import { ServerStatus } from "../enums/ServerStatus";
import useGetItems from "../custom-hooks/useGetItems";
import GenericItemDetails from "../shared/components/GenericItemDetails";
import { databaseFields } from "../constants/databaseFields";

export default function DatabaseDetails() {
  const { databaseId } = useParams<{ databaseId: string }>();
  const requestUrl = baseUrl + serverRoutes.databaseDetails + databaseId;
  const { serverStatus, data, getData } = useGetItems<IDatabase>(requestUrl);
  useEffect(() => { getData() }, [])

  return (
    <>
      <h3>Database details</h3>
      {
        serverStatus === ServerStatus.Success ?
          <GenericItemDetails fields={databaseFields} data={data[0]} /> :
          <h4>{serverStatus === ServerStatus.Loading ? 'Data loading...' : 'Server error'}</h4>
      }
    </>
  )
}