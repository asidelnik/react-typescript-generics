import { useParams } from "react-router-dom";
import { IDatabase } from "../interfaces/IDatabase";
import { baseUrl, serverRoutes } from "../constants/routes";
import { useEffect } from "react";
import { ServerStatus } from "../enums/ServerStatus";
import useGetItems from "../custom-hooks/useGetItems";
import GenericItemDetails from "../shared/components/GenericItemDetails";
import { databaseFields } from "../constants/databaseFields";
import Spinner from "../shared/components/Spinner";

export default function DatabaseDetails() {
  const { id } = useParams<{ id: string }>();
  const requestUrl = baseUrl + serverRoutes.databaseDetails + id;

  const { serverStatus, data, getData } = useGetItems<IDatabase>(requestUrl);
  useEffect(() => { getData() }, [])

  return (
    <>
      {
        serverStatus === ServerStatus.Success ?
          <GenericItemDetails fields={databaseFields} data={data[0]} /> :
          <h4>{serverStatus === ServerStatus.Loading ? <Spinner /> : 'Server error'}</h4>
      }
    </>
  )
}