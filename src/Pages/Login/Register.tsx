import axios from "axios";
import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin";

type LocationProps = {
  state: {
    from: Location;
  };
};
const Register = (): JSX.Element => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [user1] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation() as unknown as LocationProps;
  let from = location.state?.from?.pathname || "/";
  // useEffect(() => {

  // }, [error, from, loading, navigate, user]);
  const handleRegister = async (event: any) => {
    event.preventDefault();
    if (loading) {
      return <div>Loading</div>;
    }
    if (error) {
      toast.error(error?.message);
    }
    const name = event?.target?.name?.value;
    const email = event?.target?.email?.value;
    const password = event?.target?.password?.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile(name);
    // const postUser = async () => {
    // if (user1) {
    const role = "user";
    const url1 = `http://localhost:5000/user/${email}`;
    await axios
      .put(url1, {
        email: email,
        name: name,
        role: role,
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // }
    // };
    // postUser();
    if (user1) {
      toast.success("Successfully Registered");
      navigate(from, { replace: true });
    }
    console.log(email, password, name);
  };
  return (
    <section className="h-screen container mx-auto mt-20">
      <div className="card lg:card-side bg-base-100 shadow-xl mx-auto">
        {/* <figure>
          <img className="w-4/5" src={"sign"} alt="Album" />
        </figure> */}
        <div className="card-body my-auto text-center">
          <h2 className="card-title text-2xl font-bold mx-auto">
            Please Register
          </h2>
          {/* +++++++ */}
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="input input-bordered input-primary w-full max-w-xs my-4"
            />
            <br />
            <input
              type="email"
              name="email"
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
              value="Register"
              className="btn btn-wide btn-primary"
            />
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link
              className="text-primary"
              style={{ textDecoration: "none" }}
              to="/login"
            >
              Please Login
            </Link>{" "}
          </p>
          <hr className="w-50 mx-auto" />
          {/* +++++++ */}
          <div className="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </section>
  );
};

export default Register;
