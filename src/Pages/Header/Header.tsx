import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const menuItems: JSX.Element = (
    <>
      <li>
        <NavLink className="mx-2" to="/allBooks">
          All books
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className="mx-2" to="/myProfile">
            My Profile
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink className="mx-2" to="/cart">
            Cart
          </NavLink>
        </li>
      )}
      <li>
        <a className="mx-2" href="/#contact">
          Contact
        </a>
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
    <div className="navbar bg-teal-50 font-bold">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
          QbBooks
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img className="" src={`${user?.photoURL}`} alt="" />
                </div>
              </div>
            </label>
            <ul
              style={{ zIndex: 1 }}
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-transparent rounded-box w-52"
            >
              <li>
                <NavLink
                  className="btn text-teal-50 hover:btn-warning"
                  to="/addBookDB"
                >
                  Add Book
                </NavLink>
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="btn text-teal-50 hover:btn-warning"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink className="btn " to="/login">
            Login
          </NavLink>
        )}
        {/* {user ? (
          <button onClick={logOut} className="btn hover:btn-primary">
            Sign Out
          </button>
        ) : (
          <NavLink className="btn " to="/login">
            Login
          </NavLink>
        )} */}
      </div>
    </div>
  );
};

export default Header;
