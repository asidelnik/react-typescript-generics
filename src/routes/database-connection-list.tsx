import { baseUrl, serverRoutes } from "../constants/server";
import useGetServerData from "../custom-hooks/useGetServerData";
import { ServerStatus } from "../enums/ServerStatus";
import GenericTable from "../shared/components/GenericTable";
import { databaseFields } from "../constants/databaseFields";
import Modal from "../shared/components/Modal";
import GenericForm from "../shared/components/GenericForm";
import useModal from "../custom-hooks/useModal";
import { IDatabase } from "../interfaces/IDatabase";

export default function DatabaseConnectionList() {
  const requestUrl = baseUrl + serverRoutes.databases;
  const { serverStatus, data } = useGetServerData<IDatabase>(requestUrl);
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <header className="list-header">
        <h3>Database connections list</h3>
      </header>
      <main>
        <div className="button-container">
          <button onClick={toggleModal} className="primary">Add +</button>
        </div>
        <div className="table-container">
          {serverStatus === ServerStatus.Loading && <h4>Data loading...</h4>}
          {serverStatus === ServerStatus.Success && <GenericTable fields={databaseFields} data={data} />}
          {serverStatus === ServerStatus.Error && <h4>Server error</h4>}
        </div>
      </main>

      <Modal isOpen={isOpen} onRequestClose={toggleModal} modalTitle="Add a database connection">
        <GenericForm fields={databaseFields} requestUrl={requestUrl} onSubmitCloseModal={toggleModal} />
      </Modal>
    </>
  )
}