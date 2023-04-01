import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => { })
    .catch((error)=>console.log(error))
  }
  return (
    <>
     
      {
        user?.uid ?
           <li>
        <button onClick={handleSignOut} className="btn-ghost">
          SignOut
            </button>
          </li>
          :<li>
          <Link to="/signin" className="btn-ghost">
          signIn
            </Link>
          </li>

}
      <li>
        <Link to="/signup" className="btn-ghost">
          SignUp
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="btn-ghost">
          Dashboard
        </Link>
      </li>
    </>
  );
};

export default Navbar;
