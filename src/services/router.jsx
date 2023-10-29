import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Easy } from "../features/easy/utils";
import { Hard } from "../features/hard/utils";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Easy />} />
        <Route path="/hard" element={<Hard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
