import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4 hover:shadow-3xl transition-shadow ">
          <h1 className="text-xl font-bold text-center p-4">
            Login your accoun
          </h1>
          <hr className="text-[#E7E7E7]" />
          <div className="card-body">
            <form action="">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input bg-[#F3F3F3] border-0 hover:shadow-md" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <p>
              Dont’t Have An Account ?{" "}
              <Link
                className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold"
                to="/auth/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
