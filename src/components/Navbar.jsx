import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  console.log(user);

  const navigate = useNavigate();

  const handeLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link to={"/"}>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to={"/account"}>
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            onClick={handeLogOut}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white "
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <button className="text-white pr-4">Sign in</button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white ">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
