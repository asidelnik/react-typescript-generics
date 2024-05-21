import { useEffect, useState } from "react";
import { IDatabase } from "../interfaces/IDatabase";
import axios from "axios";
import { ServerStatus } from "../enums/ServerStatus";

export default function useServerData(fakeServerUrl: string) {
  const [serverStatus, setServerStatus] = useState<ServerStatus>(ServerStatus.Loading);
  const [data, setData] = useState<IDatabase[]>([]);

  useEffect(() => {
    axios.get<IDatabase[]>(fakeServerUrl)
      .then((response) => {
        setServerStatus(ServerStatus.Success);
        setData(response.data);
      })
      .catch(() => {
        setServerStatus(ServerStatus.Error);
      });
  }, []);
  return { serverStatus, data };
}