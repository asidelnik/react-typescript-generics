import { useEffect, useState } from "react";
import axios from "axios";
import { ServerStatus } from "../enums/ServerStatus";

export default function useGetServerData<T>(fakeServerUrl: string) {
  const [serverStatus, setServerStatus] = useState<ServerStatus>(ServerStatus.Loading);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    axios.get<T[]>(fakeServerUrl)
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