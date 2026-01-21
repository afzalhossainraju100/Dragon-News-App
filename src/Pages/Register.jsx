import React from 'react';
import { Link } from 'react-router-dom';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';



const Register = () => {
    const {createUser,setUser} = use(AuthContext); 
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({name, photoURL, email, password});
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            setUser(user);
            console.log(user);
            form.reset();
        })
        .catch(error=>{
            console.error(error);
        });
    }
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-1/2 ">
          <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl p-4 hover:shadow-3xl transition-shadow ">
            <h1 className="text-xl font-bold text-center p-4">
              Register your account
            </h1>
            <hr className="text-[#E7E7E7]" />
            <div className="card-body">
              <form onSubmit={handleRegister} action="">
                <fieldset className="fieldset">
                  <label className="label">Your Name</label>
                  <input
                    type="text"
                    name='name'
                    className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                    placeholder="Enter your name"
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    name='photoURL'
                    className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                    placeholder="Enter photo URL"
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name='email'
                    className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                    placeholder="Email"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name='password'
                    className="input bg-[#F3F3F3] border-0 hover:shadow-md"
                    placeholder="Password"
                    required
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type='submit' className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
              <p>
                Already have an account?{" "}
                <Link
                  className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-bold"
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