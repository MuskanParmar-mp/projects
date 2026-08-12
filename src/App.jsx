import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import EventList from "./EventList";

function App(){

  
  return(
    <>
     <Navbar />
     

     <Routes>
       <Route path="/" element={<Home/> }/> 
       <Route path="/about" element={<About/> }/>
       <Route path="/login" element={<Login/> }/>
       <Route path="/register" element={<Register/> }/>
       <Route path="/events" element={<EventList/> }/>
     </Routes>

     <Footer />

    </>
  )
}

export default App;