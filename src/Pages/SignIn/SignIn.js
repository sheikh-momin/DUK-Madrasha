import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animation from "../../Assets/animation.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const eye = <FontAwesomeIcon icon={faEye} />;

const SignIn = () => {
  const { logIn } = useContext(AuthContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState("");
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';
  const handleSignIn = (data) => {
    setError("");
    setData(data);
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.log("mes", error.message);
        setError(error);
      });
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="grid lg:grid-cols-2">
        <div className="flex justify-center  sm:mb-12">
          <Lottie animationData={animation} loop={true} />
        </div>
        <div className=" flex justify-center  ">
          {/*<!-- Component: Card with form --> */}
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 border rounded-sm border-violet-600 w-11/12 lg:w-96 mt-10 lg:h-96"
          >
            {/* <p>
            {error === "Firebase: Error (auth/wrong-password)."
              ? "Wrong Password"
              : "Wrong Email"}
          </p> */}
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="mb-6 mt-6 text-center">
                <h3 className="text-xl font-medium text-slate-700">Sign In</h3>
              </header>
              <div className="relative mb-5">
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="email"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 bg-white text-right"
                  placeholder="Email address"
                />
                {errors.email && (
                  <p className="text-warning text-sm">
                    {errors.email?.message}
                  </p>
                )}
                <label
                  htmlFor="email"
                  className=" absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm "
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password atleast 6 charecter long",
                    },
                  })}
                  autoComplete="off"
                  id="password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 bg-white text-right"
                  placeholder="Password"
                />

                {errors.password && (
                  <p className="text-warning text-sm">
                    {errors.password?.message}
                  </p>
                )}
                <label
                  htmlFor="password"
                  className="absolute right-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Password
                </label>
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  <i onClick={togglePasswordVisiblity}>{eye}</i>
                </label>
              </div>
              <div>
                {error && (
                  <p className="text-purple-700">
                    Please Provide Valid Email and password
                  </p>
                )}
              </div>
              <input
                className="btn btn-primary w-full mb-5 mt-16"
                type="submit" value="sign In"
              />
            </div>
          </form>
          {/*<!-- End Card with form --> */}
        </div>
      </div>
    </section>
  );
};

export default SignIn;
