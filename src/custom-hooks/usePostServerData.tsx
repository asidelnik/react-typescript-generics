import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ServerStatus } from "../enums/ServerStatus";
import { IFormField } from "../interfaces/IGenericFields";

export default function usePostServerData<T>(formFields: IFormField[], requestUrl: string) {
  const [serverStatus, setServerStatus] = useState<ServerStatus>(ServerStatus.Loading);

  // Future better solution React Canary <form actions={}> with FormData
  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    setServerStatus(ServerStatus.Submitted);
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: any = {};
    formFields.forEach((field: IFormField) => {
      data[field.name] = formData.get(field.name);
    });

    axios.post<T>(requestUrl, data)
      .then((response: AxiosResponse<T>) => {
        setServerStatus(ServerStatus.Success);
      })
      .catch(() => {
        setServerStatus(ServerStatus.Error);
      });

  }

  return { serverStatus, onSubmitHandler };
}