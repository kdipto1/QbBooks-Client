import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user, error, loading] = useAuthState(auth);
  const menuItems: JSX.Element = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/addBookDB">Add Book</NavLink>
      </li>
    </>
  );
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("email");
    toast.success("You'r logged out");
  };
  return (
    <div className="navbar bg-primary text-primary-content font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost normal-case text-xl font-bold">
          QbBooks
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={logOut} className="btn hover:btn-primary">
            Sign Out
          </button>
        ) : (
          <NavLink className="btn " to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
