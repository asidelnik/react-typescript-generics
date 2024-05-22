import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ServerStatus } from "../enums/ServerStatus";

export default function useGetItems<T>(fakeServerUrl: string) {
  const [serverStatus, setServerStatus] = useState<ServerStatus>(ServerStatus.Loading);
  const [data, setData] = useState<T[]>([]);

  function getData() {
    axios.get<T[]>(fakeServerUrl)
      .then((response: AxiosResponse<T[]>) => {
        setServerStatus(ServerStatus.Success);
        setData(response.data);
      })
      .catch(() => {
        setServerStatus(ServerStatus.Error);
      });
  }

  return { serverStatus, data, getData };
}