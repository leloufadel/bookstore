import './App.css';
import { Route, Routes } from 'react-router-dom';
// import NoPageFound from './pages/NoPageFound';
import NavPage from './components/NavPage/NavPage';
import CategoriesPage from './pages/CatagoriesPage';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <div className="App">
      <NavPage />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
