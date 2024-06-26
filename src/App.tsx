import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Footer/Footer";
import Register from "./Pages/Login/Register";
// import AddBookDB from "./Pages/Dashboard/AddBookDB";
import Book from "./Pages/Books/Book";
import RequireAuth from "./Pages/Login/RequireAuth";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import MyProfile from "./Pages/Dashboard/MyProfile";
import AllBooks from "./Pages/Books/AllBooks";
// import Cart from "./Pages/Cart/Cart";
import NotFound from "./Pages/NotFound/NotFound";
import CategoryBooks from "./Pages/Books/CategoryBooks";
// import Payment from "./Pages/Dashboard/Payment";
import { Suspense, lazy } from "react";

const Payment = lazy(() => import("./Pages/Dashboard/Payment"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const AddBookDB = lazy(() => import("./Pages/Dashboard/AddBookDB"));
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const MyProfile = lazy(() => import("./Pages/Dashboard/MyProfile"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/addBookDB"
          element={
            <Suspense>
              <AddBookDB />
            </Suspense>
          }
        />
        <Route
          path="/book/:id"
          element={
            <RequireAuth>
              <Book />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/myProfile"
          element={
            <RequireAuth>
              <Suspense>
                <MyProfile />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Suspense>
                <Cart />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route path="/allBooks" element={<AllBooks />} />
        <Route path="/category/:category" element={<CategoryBooks />} />
        <Route
          path="/payment/:id"
          element={
            <Suspense>
              <Payment />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
