import useServerData from "../custom-hooks/useServerData";

export default function DatabaseConnectionList() {
  const { serverStatus, data } = useServerData();
  return (
    <>
      <div>Database connection list {serverStatus}</div>
    </>
  )
}