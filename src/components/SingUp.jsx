import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SingUp = () => {
  return (
    <div>
      <div className=" bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold py-2">Login now!</h1>
          </div>
          <div className="rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="imageURL"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPass"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-white hover:translate-y-1">
                  Register
                </button>
              </div>
              <div>
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-1">
                  LogIn
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

export default SingUp;