import store from "@/entities/store";
import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

export const withProviders = (Component: FC) => {
  return function WithProvidersComponent() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    );
  };
};
