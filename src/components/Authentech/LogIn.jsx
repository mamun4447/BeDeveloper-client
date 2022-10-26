import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/UserContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const LogIn = () => {
  const { user, googleSignIn, signIn, gitHubSignIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const GitProvider = new GithubAuthProvider();

  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  //----------User sign in--------------//
  const handleUserSingIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (user) {
      setError("User already logged in!");
      form.reset();
    } else {
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          form.reset();
          setError("");
          //----Toast----//
          toast.success("Login succesfuly!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          //----Toast----//
          navigate(from, { replace: true });
        })
        .catch((error) => setError(error.message));
    }
  };

  //-------GoogleSignIn------//
  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    if (user) {
      setError("User Already signed in!!");
    } else {
      googleSignIn(provider)
        .then((result) => {
          console.log(result.user);
          navigate(from, { replace: true });
          setError("");

          //----Toast----//
          toast.success("Login succesfuly!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  //---------GitHub signIn----------//
  const handleGitHubSignIn = (event) => {
    event.preventDefault();

    if (user) {
      setError("User already signed in!!");
    } else {
      gitHubSignIn(GitProvider)
        .then((result) => {
          console.log(result.user);
          setError("");
          navigate(from, { replace: true });
          //----Toast----//
          toast.success("Login succesfuly!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((error) => setError(error.message));
    }
  };

  return (
    <div>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form
            onSubmit={handleUserSingIn}
            className="rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
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
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <p className="text-red-800">{error}</p>
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
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-slate-200 text-2xl p-2 rounded-full cursor-pointer hover:translate-y-1 hover:bg-black hover:text-white"
                >
                  <FaGoogle />
                </button>
                <button
                  onClick={handleGitHubSignIn}
                  className="bg-slate-200 text-2xl p-2 rounded-full cursor-pointer hover:translate-y-1 hover:bg-black hover:text-white"
                >
                  <FaGithub />
                </button>
              </div>
              <p className="text-center">Login With Social media!</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
