import { useParams } from "react-router-dom";
import { baseUrl } from "../constants/routes";
import { useEffect } from "react";
import { ServerStatus } from "../enums/ServerStatus";
import useGetItems from "../custom-hooks/useGetItems";
import GenericItemDetails from "../shared/components/GenericItemDetails";
import Spinner from "../shared/components/Spinner";
import { pagesMetaData } from "../constants/pagesMetaData";
import { IDataUnion } from "../interfaces/IUnion";
import ErrorPage from "./error-page";

export default function DetailsPage() {
  const { page, id } = useParams<{ page: string, id: string }>();
  const selectedPage = pagesMetaData.find(p => p.name === page);
  const requestUrl = selectedPage ? baseUrl + selectedPage?.getItemDetailsUrl + id : '';

  const { serverStatus, data, getData } = useGetItems<IDataUnion>();
  useEffect(() => {
    getData(requestUrl);
  }, [requestUrl]);

  return (
    <>
      {
        selectedPage && serverStatus === ServerStatus.Success ?
          <GenericItemDetails fields={selectedPage.fields} data={data[0]} /> :
          serverStatus === ServerStatus.Loading ? <Spinner /> : <ErrorPage />
      }
    </>
  )
}