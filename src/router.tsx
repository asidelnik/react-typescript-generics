import { createBrowserRouter } from "react-router-dom";
import DatabaseDetails from "./routes/database-details";
import DatabaseConnectionList from "./routes/database-connection-list";
import ErrorPage from "./routes/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DatabaseConnectionList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "database-details/:databaseId",
    element: <DatabaseDetails />,
    errorElement: <ErrorPage />,
  },
]);