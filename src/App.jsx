import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import End from "./sections/End";
import Last from "./components/Last";
// import "/src/styles/Class.css";
import Holidays from "./ServicesPages/Holidays";
import Newblog from "./Blogpages/Newblog";
import Scrolltotop from "./components/Scrolltotop";
import Productpage from "./Productpage/Productpage";
import Hiring from "./pages/Hiring";
import Dashboard from "./admin/Dashboard";
// import LocationPage from "./Blogpages/LocationPage";
import Newlog from "./Blogpages/Newlog";
import CreateBlogForm from "./admin/CreateBlogForm";
import CreateCountryForm from "./admin/CreateCountryForm";
import CreateStateForm from "./admin/CreateStateForm";
import CreateCityForm from "./admin/CreateCityForm";
import Flights from "./ServicesPages/Flights";
import Activities from "./ServicesPages/Activities";
import BusTickets from "./ServicesPages/BusTickets";
import Transport from "./ServicesPages/Transport";
import RailTickets from "./ServicesPages/RailTickets";
import Offers from "./ServicesPages/Offers";
import Hotels from "./ServicesPages/Hotels";
import CountryPage from "./admin/CountryPage";
import StatePage from "./admin/StatePage";
import CityPage from "./admin/CityPage";
import ProductDetails from "./admin/ProductDetails";
import ProductsPage from "./admin/ProductsPage";
import CreateProductPage from "./admin/CreateProductPage";
import CreateProductType from "./admin/CreateProductType";
import ProductType from "./admin/ProductType";
import NotFound from "./components/NotFound";



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
        <Route path="/services/flights" element={<Flights />} />
        <Route path="/services/offers" element={<Offers />} />
        <Route path="/services/rail-tickets" element={<RailTickets />} />
        <Route path="/services/hotels" element={<Hotels />} />
        <Route path="/services/transport" element={<Transport />} />
        <Route path="/services/activities" element={<Activities />} />
        <Route path="/services/bus-tickets" element={<BusTickets />} />
        <Route path="/blog/newblog" element={<Newblog />} />  
        <Route path="/tours" element={<Productpage />} />  
        <Route path="/hiring" element={<Hiring />} />  
        <Route path="/create-blog" element={<CreateBlogForm />} />  
        <Route path="/create-country" element={<CreateCountryForm />} />  
        <Route path="/create-state" element={<CreateStateForm />} />  
        <Route path="/create-city" element={<CreateCityForm />} />  
        <Route path="/admin-dashboard" element={<Dashboard />} />  
        {/* <Route path="/locations/:slug" element={<LocationPage />} /> */}
        <Route path="/blog/:slug" element={<Newlog />} />
        <Route path="/country/:slug/blogs" element={<CountryPage />} />
        <Route path="/state/:slug/blogs" element={<StatePage />} />
        <Route path="/city/:slug/blogs" element={<CityPage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/admin/create-product" element={<CreateProductPage />} />
        <Route path="/create-productType" element={<CreateProductType />} />
        <Route path="/productType/:slug/product" element={<ProductType />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <End />
      <Last />
    </>
  );
};

export default App;
