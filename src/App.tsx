import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrawlersProvider } from "./global/BrawlerProvider";
import './App.css'
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import BrawlersList from "./pages/BrawlersList";
import FavoriteBrawlers from "./pages/FavoriteBrawlers";

function App() {


  return (

    <BrawlersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="BrawlersList" element={<BrawlersList />} />
            <Route path="FavoriteBrawlers" element={<FavoriteBrawlers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BrawlersProvider>

  );
}

export default App
