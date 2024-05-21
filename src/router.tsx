import { createBrowserRouter } from "react-router-dom";
import DatabaseDetails from "./routes/database-details";
import DatabaseConnectionList from "./routes/database-connection-list";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DatabaseConnectionList />,
  },
  {
    path: "database-details/:databaseId",
    element: <DatabaseDetails />,
  },
]);