import Footer from "./components/Landing_page/Footer";
import Navbar from "./components/Landing_page/Navbar";

import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
