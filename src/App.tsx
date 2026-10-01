import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ReserveYourSpotPage from "./pages/ReserveYourSpotPage";
import Navigation from "./components/Navigation/Navigation";
import MenuContextProvider from "./contexts/MobileMenuContextProvider";
import Header from "./components/layout/Header";
import MobileMenu from "./components/Navigation/MobileMenu";

function App() {
  return (
    <BrowserRouter>
      <MenuContextProvider>
        <Header>
          <Navigation />
          <MobileMenu />
        </Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reserve-your-spot" element={<ReserveYourSpotPage />} />
        </Routes>
        <Footer />
      </MenuContextProvider>
    </BrowserRouter>
  );
}

export default App;
