import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    // try {
    //   const res = await axios.post(
    //     "http://localhost:5173/login",
    //     {
    //       email,
    //       password,
    //     },
    //     { withCredentials: true }
    //   );
    //   const json = res.json();
    //   console.log(json);
    //   navigate("/profile");
    // } catch (error) {
    //   console.error(error);
    // }
    dispatch(
      addUser({
        firstName: "Madhan",
        lastName: "R",
        email: "madhan@gmail.com",
        about: "Software Engineer at Professional",
        skills: [
          " React.js(Hooks)",
          " Redux",
          " JavaScript(ES6+)",
          " jQuery",
          " Handlebars.js",
          " AJAX",
          " API integration (REST)",
          " JSON",
          "HTML5",
          " CSS3",
          " GIT",
          " JBPM",
          " Kubernetes",
          " Docker",
          " Bootstrap",
          " Tailwind",
          " Responsive Design",
          " JEST",
          " Agile",
          " Wordpress",
          "SASS/SCSS.",
        ],
      })
    );
    navigate("/profile");
  };

  return (
    <div className="card bg-base-300 w-96 mx-auto my-16 shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-3xl justify-center">Sign In</h2>
        <div>
          <fieldset className="fieldset my-4 w-full">
            <legend className="fieldset-legend my-4">Email</legend>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset my-4 w-full">
            <legend className="fieldset-legend my-4">Password</legend>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full"
              placeholder="Type here"
            />
          </fieldset>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={() => handleLogin()}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
