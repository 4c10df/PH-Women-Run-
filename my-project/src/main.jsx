import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ErrorPage from "./components/errorMessage/errorPage";
import "./index.css";
import App from "./App";
import AboutUs from "./components/page/aboutUs";
import News from "./components/page/news";
import Archives from "./components/page/archives";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Helmet>
          <title>Nigeria’s Leading Travel Consolidator</title>
          <meta
            name="description"
            content="Experience the world with our trusted travel consolidator services. Over 18 years of expertise in connecting travelers with the best flights, hotels, and packages. Reliable, efficient, and customer-focused."
          />
        </Helmet>
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: (
      <>
        <Helmet>
          <title>The Powerhouse of Travel Consolidation</title>
          <meta
            name="description"
            content="Unlock top travel deals, net rates, and cutting-edge technology to boost your bookings and commissions. Leverage our expert consolidator services for unmatched support and industry expertise"
          />
        </Helmet>
        <AboutUs />
      </>
    ),
  },
  {
    path: "news",
    element: (
      <>
        <Helmet>
          <title>The Powerhouse of Travel Consolidation</title>
          <meta
            name="description"
            content="Unlock top travel deals, net rates, and cutting-edge technology to boost your bookings and commissions. Leverage our expert consolidator services for unmatched support and industry expertise"
          />
        </Helmet>
        <News />
      </>
    ),
  },
  {
    path: "archives",
    element: (
      <>
        <Helmet>
          <title>The Powerhouse of Travel Consolidation</title>
          <meta
            name="description"
            content="Unlock top travel deals, net rates, and cutting-edge technology to boost your bookings and commissions. Leverage our expert consolidator services for unmatched support and industry expertise"
          />
        </Helmet>
        <Archives />
      </>
    ),
  },
  {
    path: "contact",
    element: (
      <>
        <Helmet>
          <title>The Powerhouse of Travel Consolidation</title>
          <meta
            name="description"
            content="Unlock top travel deals, net rates, and cutting-edge technology to boost your bookings and commissions. Leverage our expert consolidator services for unmatched support and industry expertise"
          />
        </Helmet>
        <AboutUs />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
