import { baseUrl, serverRoutes } from "../constants/server";
import useServerData from "../custom-hooks/useServerData";
import { ServerStatus } from "../enums/ServerStatus";
import GenericTable from "../shared/components/GenericTable";
import { databaseColumns } from "../constants/databaseColumns";
import Modal from "../shared/components/Modal";
import GenericForm from "../shared/components/GenericForm";
import useModal from "../custom-hooks/useModal";

export default function DatabaseConnectionList() {
  const { serverStatus, data } = useServerData(baseUrl + serverRoutes.databases);
  const { isOpen, toggleModal } = useModal();

  return (
    <>
      <header className="list-header">
        <h3>Database connection list</h3>
      </header>
      <main>
        <div className="button-container">
          <button onClick={toggleModal}>Add +</button>
        </div>
        <div className="table-container">
          {serverStatus === ServerStatus.Loading && <h4>Data loading...</h4>}
          {serverStatus === ServerStatus.Success && <GenericTable metaData={databaseColumns} data={data} />}
          {serverStatus === ServerStatus.Error && <h4>Server error</h4>}
        </div>
      </main>

      <Modal isOpen={isOpen} onRequestClose={toggleModal}>
        <button onClick={toggleModal}>x</button>
        <GenericForm />
      </Modal>
    </>
  )
}