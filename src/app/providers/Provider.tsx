import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import { store } from "../store";

export function Provider() {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}
