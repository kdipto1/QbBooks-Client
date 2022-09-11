import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Footer/Footer";
import Register from "./Pages/Login/Register";
import AddBookDB from "./Pages/Dashboard/AddBookDB";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addBookDB" element={<AddBookDB />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
