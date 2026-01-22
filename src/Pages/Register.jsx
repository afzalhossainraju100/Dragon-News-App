import React from "react";
import { Link } from "react-router-dom";
import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 3) {
      setNameError("Name should be at least 3 characters long");
      return;
    } else {
      setNameError("");
    }
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            setUser(user);
          });
        form.reset();
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-1/2 ">
        <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl p-4 hover:shadow-3xl transition-shadow ">
          <h1 className="text-xl font-bold text-center p-4">
            Register your account
          </h1>
          <hr className="text-[#E7E7E7]" />
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                  placeholder="Enter your name"
                />
                {nameError && (
                  <p className="text-red-600 mt-2 mb-1">{nameError}</p>
                )}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                  placeholder="Enter photo URL"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                  placeholder="Email"
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </fieldset>
            </form>
            <p>
              Already have an account?{" "}
              <Link
                className="bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
