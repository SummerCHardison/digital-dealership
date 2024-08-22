// This is just starting code and is made to be changed
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CarPage from "./pages/CarPage/CarPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
