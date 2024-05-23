import { baseUrl, serverRoutes } from "../constants/routes";
import useGetItems from "../custom-hooks/useGetItems";
import { ServerStatus } from "../enums/ServerStatus";
import GenericTable from "../shared/components/GenericTable";
import { databaseFields } from "../constants/databaseFields";
import Modal from "../shared/components/Modal";
import GenericForm from "../shared/components/GenericForm";
import useModal from "../custom-hooks/useModal";
import { IDatabase } from "../interfaces/IDatabase";
import { useEffect } from "react";
import Spinner from "../shared/components/Spinner";

export default function DatabaseConnectionList() {
  const requestUrl = baseUrl + serverRoutes.databases;
  const { serverStatus, data, getData } = useGetItems<IDatabase>(requestUrl);
  const { isOpen, toggleModal } = useModal();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        <div className="button-container">
          <button onClick={toggleModal} className="primary">Add +</button>
        </div>
        <div className="table-container">
          {serverStatus === ServerStatus.Success ?
            <GenericTable fields={databaseFields} data={data} /> :
            <h4>{serverStatus === ServerStatus.Loading ? <Spinner /> : 'Server error'}</h4>
          }
        </div>
      </main>

      <Modal isOpen={isOpen} onRequestClose={toggleModal} modalTitle="Add a database connection">
        <GenericForm fields={databaseFields} requestUrl={requestUrl} onSubmitCloseModal={toggleModal} />
      </Modal>
    </>
  )
}