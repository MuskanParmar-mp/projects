import { Routes, Route, useLocation } from "react-router-dom";
import MyEvents from "./components/MyEvents";

import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import EventList from "./EventList";
import EventDetails from "./EventDetails";

import Footer from "./Footer";

import "./App.css";

function App() {

  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route path="/events" element={<EventList />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;