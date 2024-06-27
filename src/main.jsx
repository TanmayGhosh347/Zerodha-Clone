import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./components/Landing_page/home/HomePage.jsx";
import NotFound from "./components/Landing_page/NotFound.jsx";
import AboutPage from "./components/Landing_page/about/AboutPage.jsx";
import ProductsPage from "./components/Landing_page/products/ProductsPage.jsx";
import PricingPage from "./components/Landing_page/pricing/PriceingPage.jsx";
import SupportPage from "./components/Landing_page/support/SupportPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
