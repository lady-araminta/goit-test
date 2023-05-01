import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Tweets } from "pages/Tweets/Tweets";
import { Home } from "pages/Home/Home";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home/>} />
      </Routes>
      <GlobalStyle/>
    </>
  );
};
