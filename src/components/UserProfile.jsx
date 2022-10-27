import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div className="flex flex-col md:flex-row lg:flex-row text-center items-center p-2 w-3/4 md:w-1/2 lg:w-1/4 shadow-md my-20 mx-auto gap-2 rounded-md">
          <div className="">
            {user?.photoURL ? (
              <img className="rounded-full" src={user.photoURL} alt="" />
            ) : (
              <i className="rounded-full">
                <FaUser />
              </i>
            )}
          </div>
          <div className="md:text-left lg:text-left">
            {user?.displayName ? (
              <h3 className="text-2xl">Name: {user.displayName}</h3>
            ) : (
              <h3>Name: Unknown</h3>
            )}
            {user?.email ? (
              <h3>Email: {user.email}</h3>
            ) : (
              <h3>Email: Unknown</h3>
            )}
            <Link className="btn btn-accent btn-sm">Update Info</Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center p-2 w-1/4 shadow-md my-20 mx-auto gap-2 rounded-md">
            <div className="p-2 rounded-full  bg-slate-400">
              <i className="rounded-full text-6xl">
                <FaUser />
              </i>
            </div>
            <div>
              <h3 className="text-2xl">Name: Unknown</h3>
              <h3>Email: Unknown</h3>
              <Link to="/login" className="btn btn-accent btn-sm">
                Update Info
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;