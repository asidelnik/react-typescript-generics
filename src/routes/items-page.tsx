import { baseUrl } from "../constants/routes";
import useGetItems from "../custom-hooks/useGetItems";
import { ServerStatus } from "../enums/ServerStatus";
import GenericTable from "../shared/components/GenericTable";
import Modal from "../shared/components/Modal";
import GenericForm from "../shared/components/GenericForm";
import useModal from "../custom-hooks/useModal";
import { useEffect } from "react";
import Spinner from "../shared/components/Spinner";
import { IDataUnion } from "../interfaces/IUnion";
import { useParams } from "react-router-dom";
import { pagesMetaData } from "../constants/pagesMetaData";
import ErrorPage from "./error-page";

export default function ItemsPage() {
  const { page } = useParams<{ page: string }>();
  const selectedPage = pagesMetaData.find(p => p.name === page);
  const requestUrl = selectedPage ? baseUrl + selectedPage?.getItemsUrl : '';

  const { serverStatus, data, getData } = useGetItems<IDataUnion>(requestUrl);
  const { isOpen, toggleModal } = useModal();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {selectedPage ? (
        <>
          <main>
            {selectedPage && serverStatus === ServerStatus.Success ? (
              <>
                <div className="button-container">
                  <button onClick={toggleModal} className="primary">Add +</button>
                </div>
                <div className="table-container">
                  <GenericTable fields={selectedPage.fields} data={data} />
                </div>
              </>
            ) : (
              <h4>{serverStatus === ServerStatus.Loading ? <Spinner /> : 'Server error'}</h4>
            )}
          </main>

          <Modal isOpen={isOpen} onRequestClose={toggleModal} modalTitle={selectedPage.addLabel}>
            <GenericForm fields={selectedPage?.fields} requestUrl={requestUrl} onSubmitCloseModal={toggleModal} />
          </Modal>
        </>
      ) : <ErrorPage />}
    </>
  )
}