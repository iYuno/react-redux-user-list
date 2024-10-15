import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { BaseLayout } from "./layouts/BaseLayout";

export const router = createBrowserRouter(
  [
    {
      element: <BaseLayout />,
      children: [
        {
          path: "",
          element: <MainPage />,
        },
      ],
    },
  ],
  {
    basename: "/react-redux-user-list",
  },
);
