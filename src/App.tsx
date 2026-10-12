import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { OurCafePage } from "./pages/OurCafePage";
import { GalleryPage } from "./pages/GalleryPage";
import { VisitPage } from "./pages/VisitPage";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/our-cafe" element={<OurCafePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/visit" element={<VisitPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
