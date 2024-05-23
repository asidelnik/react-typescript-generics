import { createBrowserRouter } from "react-router-dom";
import DatabaseDetails from "./routes/database-details";
import DatabaseConnectionList from "./routes/database-connection-list";
import ErrorPage from "./routes/error-page";
import PagesLayout from "./layouts/PagesLayout";
import PageLayout from "./layouts/PageLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PagesLayout />,
    children: [
      {
        path: "/:page",
        element: <PageLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "items",
            element: <DatabaseConnectionList />,
            errorElement: <ErrorPage />,
          },
          {
            path: "item-details/:id",
            element: <DatabaseDetails />,
            errorElement: <ErrorPage />,
          },
          {
            path: "",
            element: <ErrorPage />
          },
        ]
      },
    ]
  },
]);