import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ServerStatus } from "../enums/ServerStatus";
import { IFormField } from "../interfaces/IGenericFields";

export default function usePostServerData<T>(formFields: IFormField[], requestUrl: string) {
  const [serverStatus, setServerStatus] = useState<ServerStatus>(ServerStatus.Loading);

  // Future better solution React Canary <form actions={}> with FormData
  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
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


// // Axios POST response:
// {
//   "data": {
//     "id": "d6fe",
//       "name": "asdf",
//         "url": "asfd",
//           "username": "asfd",
//             "password": "#G71Cxhd",
//               "type": "Snowflake"
//   },
//   "status": 201,
//     "statusText": "Created",
//       "headers": {
//     "content-length": "124",
//       "content-type": "application/json"
//   },
//   "config": {
//     "transitional": {
//       "silentJSONParsing": true,
//         "forcedJSONParsing": true,
//           "clarifyTimeoutError": false
//     },
//     "adapter": [
//       "xhr",
//       "http"
//     ],
//       "transformRequest": [
//         null
//       ],
//         "transformResponse": [
//           null
//         ],
//           "timeout": 0,
//             "xsrfCookieName": "XSRF-TOKEN",
//               "xsrfHeaderName": "X-XSRF-TOKEN",
//                 "maxContentLength": -1,
//                   "maxBodyLength": -1,
//                     "env": { },
//     "headers": {
//       "Accept": "application/json, text/plain, */*",
//         "Content-Type": "application/json"
//     },
//     "method": "post",
//       "url": "http://localhost:4000/databases",
//         "data": "{\"name\":\"asdf\",\"url\":\"asfd\",\"username\":\"asfd\",\"password\":\"#G71Cxhd\",\"type\":\"Snowflake\"}"
//   },
//   "request": { }
// }