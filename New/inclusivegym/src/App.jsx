import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutUs/aboutUs.jsx";
import Contact from "./pages/contact/contact.jsx";
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login.jsx"; 
import PartnerGyms from "./pages/partnerGyms/partnerGyms.jsx";
import Registration from "./pages/registration/registration.jsx";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/partnerGyms" element={<PartnerGyms />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;
