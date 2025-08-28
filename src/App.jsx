import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import End from "./sections/End";
import Last from "./components/Last";
import "/src/styles/Class.css";
import Holidays from "./ServicesPages/Holidays";
import Newblog from "./Blogpages/Newblog";
import Scrolltotop from "./components/Scrolltotop";
import Productpage from "./Productpage/Productpage";
import Hiring from "./pages/Hiring";
import CreateBlogForm from "./admin/createBlogForm";
import Dashboard from "./admin/Dashboard";
import CreateLocationForm from "./admin/CreateLocationForm";
import LocationPage from "./Blogpages/LocationPage";
import Newlog from "./Blogpages/Newlog";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/holidays" element={<Holidays />} />
        <Route path="/blog/newblog" element={<Newblog />} />  
        <Route path="/tours" element={<Productpage />} />  
        <Route path="/hiring" element={<Hiring />} />  
        <Route path="/create-blog" element={<CreateBlogForm />} />  
        <Route path="/create-location" element={<CreateLocationForm />} />  
        <Route path="/admin-dashboard" element={<Dashboard />} />  
        <Route path="/locations/:slug" element={<LocationPage />} />
        <Route path="/blog/:slug" element={<Newlog />} />
      </Routes>
      <End />
      <Last />
    </>
  );
};

export default App;
