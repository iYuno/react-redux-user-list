import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "@/pages/main";
import { BaseLayout } from "./layouts/baseLayout";

export const router = createBrowserRouter(
  [
    {
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <MainPage></MainPage>,
        },
      ],
    },
  ],
  {
    basename: "/react-test-lab",
  },
);
