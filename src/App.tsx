import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Result from "./pages/resultPage/resultPage";
import HomePage from "./pages/homePage/homePage";
import NewProfilePage from "./pages/newProfilePage/newProfilePage";
import ErrorPage from "./pages/errorPage/errorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="newProfilePage" element={<NewProfilePage />} />
        <Route path="result" element={<Result />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


//create error page/route