import { useCallback, useState } from "react";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { ServerStatus } from "../enums/ServerStatus";

export default function useGetItems<T>() {
  const [serverStatus, setServerStatus] = useState<ServerStatus>(ServerStatus.Loading);
  const [data, setData] = useState<T[]>([]);
  let cancelToken: CancelTokenSource;

  function getData(requestUrl: string) {
    cancelToken = axios.CancelToken.source();
    axios.get<T[]>(requestUrl, { cancelToken: cancelToken.token })
      .then((response: AxiosResponse<T[]>) => {
        setServerStatus(ServerStatus.Success);
        setData(response.data);
      })
      .catch(() => {
        setServerStatus(ServerStatus.Loading);
      });
  }

  const cancel = useCallback(() => {
    if (cancelToken) {
      cancelToken.cancel('User cancelation.');
      setData([]);
      setServerStatus(ServerStatus.Loading);
    }
  }, []);

  return { serverStatus, data, getData, cancel };
}