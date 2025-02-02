import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Navbrar from "./components/Navbrar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
function App() {
  return (
    <div className="App relative flex justify-center ">
      <Router>
        <Navbrar />
        <MobileNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
