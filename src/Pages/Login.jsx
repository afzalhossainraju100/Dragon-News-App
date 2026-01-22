import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const Login = () => {
  const [error, setError] = useState("");
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });

    setLoading(true);
    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(location.state || "/");
        alert("User logged in successfully", loggedUser);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4 hover:shadow-3xl transition-shadow ">
          <h1 className="text-xl font-bold text-center p-4">
            Login your account
          </h1>
          <hr className="text-[#E7E7E7]" />
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                  placeholder="Password"
                />
                {
                  error && <p className="text-red-600 mt-2 mb-1">Something is wrong</p>
                }
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button
                  className="btn btn-neutral mt-4"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
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
