import React, { useEffect, useRef } from "react";
import {
  useAuthState,
  useSendEmailVerification,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

type LocationProps = {
  state: {
    from: Location;
  };
};
const Login = (): JSX.Element => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const [sendEmailVerification, verifySending, verifyError] =
    useSendEmailVerification(auth);
  const [user1, error1, loading1] = useAuthState(auth);
  const emailRef = useRef<HTMLInputElement>(null);
  let navigate = useNavigate();
  let location = useLocation() as unknown as LocationProps;
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const login = () => {
      if (loading || loading1) {
        return <div>Loading</div>;
      }
      if (user || user1) {
        toast.success("Login Successful");
        // console.log(user1);
        const url = "https://qbbooks.onrender.com/login";
        axios
          .post(url, { email: user1?.email })
          .then((response) => {
            const { data } = response;
            localStorage.setItem("accessToken", data.token);
            localStorage.setItem("email", `${user1?.email}`);
            // console.log(data);
            navigate(from, { replace: true });
          })
          .catch(function (error) {
            toast.error(error.message);
            console.log(error);
          });
      }
      if (error1 || resetError) {
        return <div></div>;
      }
    };
    login();
  }, [
    error,
    from,
    loading,
    navigate,
    user,
    user1,
    resetError,
    loading1,
    error1,
  ]);

  const handleLogin = (event: any) => {
    event.preventDefault();
    const email = event?.target?.email?.value;
    const password = event?.target?.password?.value;
    signInWithEmailAndPassword(email, password);
    event.target.reset();
  };
  const resetPassword = async () => {
    const email: any = emailRef.current?.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <section className="h-screen container mx-auto mt-20">
      <div className="card lg:card-side bg-base-100 shadow-xl mx-auto">
        {/* <figure>
          <img className="" src={"login"} alt="Album" />
        </figure> */}
        <div className="card-body my-auto text-center">
          <h2 className="card-title text-2xl font-bold mx-auto">
            Please Login
          </h2>
          {/* +++++++ */}
          <form onSubmit={handleLogin}>
            <input
              name="email"
              type="email"
              ref={emailRef}
              placeholder="Your Email"
              required
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
              className="input input-bordered input-primary w-full max-w-xs my-4"
            />
            <br />
            <input
              type="submit"
              value="Login"
              className="btn btn-primary btn-wide mt-2"
            />
          </form>
          <h1>
            Don't have an account, Please{" "}
            <Link className="text-primary" to="/register">
              Register
            </Link>{" "}
          </h1>
          <h1 className="">
            Forget password?{" "}
            <span className="text-primary" onClick={resetPassword}>
              Reset Password
            </span>
          </h1>
          {/* +++++++ */}
          <div className="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </section>
  );
};

export default Login;
