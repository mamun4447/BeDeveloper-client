import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/UserContext";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  //------Event Listenners-----//
  const handleSubmit = (event) => {
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const photoURL = from.imageURL.value;
    const password = from.password.value;
    const confirmPassword = from.confirmPass.value;

    if (password !== confirmPassword) {
      setError("password doesn't match!!");
    } else {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div>
      <div className=" bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold py-2">Login now!</h1>
          </div>
          <div className="rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="full name"
                  className="input input-bordered"
                  required
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="imageURL"
                  placeholder="photo url"
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
                  placeholder="confirm password"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
