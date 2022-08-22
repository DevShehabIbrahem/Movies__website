import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Loading from "./common/shared/Loading/Loading";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./pages/Feed";
import Home from "./pages/Home";

const App: FC = () => {
  const [waitTimeOut, setWaitTimeOut] = useState<boolean>(true);

  useEffect(() => {
    const waitTime = setTimeout(() => {
      setWaitTimeOut(false);
    }, 1700);
    return () => clearTimeout(waitTime);
  }, []);

  return (
    <>
      {waitTimeOut ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Feed />} />
          </Routes>

          <Footer />
        </>
      )}
    </>
  );
};

export default App;
