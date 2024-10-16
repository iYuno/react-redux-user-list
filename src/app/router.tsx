import { createBrowserRouter } from "react-router-dom";
import { UserList } from "@/widgets/UserList";
import { UserProfile } from "@/widgets/UserProfile";
import { BaseLayout } from "./layouts/BaseLayout";

export const router = createBrowserRouter(
  [
    {
      element: <BaseLayout />,
      children: [
        {
          path: "",
          element: <UserList />,
        },
        {
          path: "/user/:id",
          element: <UserProfile />,
        },
      ],
    },
  ],
  {
    basename: "/react-redux-user-list",
  },
);
