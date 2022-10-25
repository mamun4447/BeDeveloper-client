import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LogIn = () => {
  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent border-none hover:translate-y-1">
                  Login
                </button>
              </div>
              <div>
                Dont't have an account?{" "}
                <Link to="/signup" className="underline underline-offset-1 ">
                  Register
                </Link>
              </div>
              <div className="flex justify-center items-center gap-5 ">
                <i className="bg-slate-200 text-2xl p-2 rounded-full cursor-pointer hover:translate-y-1 hover:bg-black hover:text-white">
                  <FaGoogle />
                </i>
                <i className="bg-slate-200 text-2xl p-2 rounded-full cursor-pointer hover:translate-y-1 hover:bg-black hover:text-white">
                  <FaGithub />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;