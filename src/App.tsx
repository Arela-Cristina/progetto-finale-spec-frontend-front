import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrawlersProvider } from "./global/BrawlerProvider";
import { SearchContextProvider } from "./global/SearchContext";
import './App.css'
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import BrawlersList from "./pages/BrawlersList";
import FavoriteBrawlers from "./pages/FavoriteBrawlers";

function App() {


  return (
    <BrawlersProvider>
      <SearchContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="BrawlersList" element={<BrawlersList />} />
              <Route path="FavoriteBrawlers" element={<FavoriteBrawlers />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </BrawlersProvider>

  );
}

export default App
