import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const SingUp = () => {
  const provider = new GoogleAuthProvider();
  const GitProvider = new GithubAuthProvider();
  const { user, createUser, UpdateProfile, googleSignIn, gitHubSignIn } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  //------Event Listenners-----//
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.imageURL.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPass.value;

    if (user) {
      setError("User all ready loged in!!");
      form.reset();
    } else {
      if (password !== confirmPassword) {
        setError("password doesn't match!!");
      } else {
        createUser(email, password)
          .then((result) => {
            handleUserPhotoName(name, photoURL);
            navigate(from, { replace: true });
            form.reset();
            setError("");
            //----Toast----//
            toast.success("Sign up succesfully!!", {
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
    }
  };

  //------User name&photo --------//
  const handleUserPhotoName = (name, photoURL) => {
    UpdateProfile(name, photoURL)
      .then((result) => {})
      .catch((error) => setError(error.message));
  };

  //-------GoogleSignIn------//
  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    if (user) {
      setError("User Already signed in!!");
    } else {
      googleSignIn(provider)
        .then((result) => {
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
        .catch((error) => setError(error.message));
    }
  };

  return (
    <div>
      <div className=" bg-base-200">
        <div className="container  mx-auto hero-content flex-col">
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
              <p className="text-red-800">{error}</p>
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
              <p className="text-center">Login with social media!</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
