import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrawlersProvider } from "./global/BrawlerProvider";
import { SearchContextProvider } from "./global/SearchContext";
import './App.css'
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import BrawlersList from "./pages/BrawlersList";
import BrawlerDetail from "./pages/BrawlerDetail";
import FavoriteBrawlers from "./pages/FavoriteBrawlers";
import BrawlersComparison from "./pages/BrawlersComparison";
import PageNotFound from "./pages/PageNotFound";

function App() {


  return (
    <BrawlersProvider>
      <SearchContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="BrawlersList" element={<BrawlersList />} />
              <Route path="BrawlerDetail/:id" element={<BrawlerDetail />} />
              <Route path="FavoriteBrawlers" element={<FavoriteBrawlers />} />
              <Route path="BrawlersComparison" element={<BrawlersComparison />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </BrawlersProvider>

  );
}

export default App
