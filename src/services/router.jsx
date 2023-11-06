import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Easy } from "../features/easy/utils";
import { Hard } from "../features/hard/utils";
import ErrorPage from "../features/easy/utils/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Easy />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
