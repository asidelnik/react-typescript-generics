import { useEffect, useState } from "react";
import { IDatabase } from "../types/IDatabase";
import axios from "axios";
import { baseUrl, serverRoutes } from "../constants/server";
import { ServerStatus } from "../types/ServerStatus";

export default function useServerData() {
  const [serverStatus, setServerStatus] = useState<ServerStatus>('LOADING');
  const [data, setData] = useState<IDatabase[]>([]);

  useEffect(() => {
    const fakeServerUrl = baseUrl + serverRoutes.databases;
    axios.get<IDatabase[]>(fakeServerUrl)
      .then((response) => {
        setServerStatus('WORKING');
        setData(response.data);
      })
      .catch(() => {
        setServerStatus('NOT WORKING');
      });
  }, []);
  return { serverStatus, data };
}