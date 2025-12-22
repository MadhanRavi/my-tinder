import React from "react";
import logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { USER_IMG } from "../utils/constants";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-300 shadow-sm flex justify-between">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="Logo" className="w-14" />
          Dev-Tinder
        </a>
      </div>
      <div className="flex gap-2">
        {user && (
          <div className="dropdown dropdown-end">
            <div className="flex items-center">
              <p>
                Welcome, <b>{user.firstName}!</b>
              </p>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mx-5"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={USER_IMG} />
                </div>
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
