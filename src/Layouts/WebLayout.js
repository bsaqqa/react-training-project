import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const WebLayout = ({ children }) => (
  <>
    <Navbar />

    {children}
    <Footer />
  </>
);

const WebLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <WebLayout>
          <Component {...props} />
        </WebLayout>
      )}
    />
  );
};

export default WebLayoutRoute;
