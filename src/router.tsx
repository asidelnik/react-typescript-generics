import { createBrowserRouter } from "react-router-dom";
import DetailsPage from "./routes/details-page";
import ItemsPage from "./routes/items-page";
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
            element: <ItemsPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "item-details/:id",
            element: <DetailsPage />,
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