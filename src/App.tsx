import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./pages/Feed";
import Home from "./pages/Home";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Feed />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
