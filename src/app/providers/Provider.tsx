import { RouterProvider } from "react-router-dom";
import { router } from "../router";

export function Provider() {
  return <RouterProvider router={router} />;
}
