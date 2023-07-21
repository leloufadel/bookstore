import './App.css';
import { Route, Routes } from 'react-router-dom';
// import NoPageFound from './pages/NoPageFound';
import NavPage from './components/NavPage/NavPage';
// import CategoriesPage from './pages/CategoriesPage';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <div className="App">
      <NavPage />
      <Routes>
        <Route path="/" element={<BooksPage />} />
      </Routes>
    </div>
  );
}

export default App;
