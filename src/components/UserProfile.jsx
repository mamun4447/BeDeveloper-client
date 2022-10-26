import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          {user?.photoUrl ? <img src={user.photoUrl} alt="" /> : <FaUser />}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UserProfile;
