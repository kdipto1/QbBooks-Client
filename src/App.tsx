import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Footer/Footer";
import Register from "./Pages/Login/Register";
import AddBookDB from "./Pages/Dashboard/AddBookDB";
import Book from "./Pages/Books/Book";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AllBooks from "./Pages/Books/AllBooks";
import Cart from "./Pages/Cart/Cart";
import NotFound from "./Pages/NotFound/NotFound";
import CategoryBooks from "./Pages/Books/CategoryBooks";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addBookDB" element={<AddBookDB />} />
        <Route
          path="/book/:id"
          element={
            <RequireAuth>
              <Book />
            </RequireAuth>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/myProfile"
          element={
            <RequireAuth>
              <MyProfile />
            </RequireAuth>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/allBooks" element={<AllBooks />} />
        <Route path="/category/:category" element={<CategoryBooks />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
