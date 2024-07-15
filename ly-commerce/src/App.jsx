import "./App.css";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>


);
}
export default App;
