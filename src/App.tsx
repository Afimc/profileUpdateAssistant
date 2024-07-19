import './App.scss'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Result from './pages/resultPage/resultPage';
import HomePage from './pages/homePage/homePage';
import NewProfilePage from './pages/newProfilePage/newProfilePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="newProfilePage" element={<NewProfilePage />} />
        <Route path="result" element={<Result />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App

