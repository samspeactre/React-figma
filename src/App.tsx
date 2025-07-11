import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
