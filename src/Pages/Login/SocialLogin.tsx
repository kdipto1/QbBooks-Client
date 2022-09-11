import React, { useEffect } from "react";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import axios from "axios";

type LocationProps = {
  state: {
    from: Location;
  };
};
const SocialLogin = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [user1] = useAuthState(auth);
  useEffect(() => {
  const postUser = async () => {
    const email: string = user1?.email!;
    if (user1) {
      toast.success("Login Successful");
      // console.log(user1);
      const url = "http://localhost:5000/login";
      await axios
        .post(url, { email: user1?.email })
        .then((response) => {
          const { data } = response;
          localStorage.setItem("accessToken", data.token);
          localStorage.setItem("email", email);
          navigate(from, { replace: true });
        })
        .catch(function (error) {
          toast.error(error.message);
          console.log(error);
        });
      if (user1) {
        const email = user1?.email;
        const name = user1?.displayName;
        const role = "user";
        const url1 = `http://localhost:5000/user/${email}`;
        await axios
          .put(url1, { name: name, email: email, role: role })
          .then((response) => {
            const { data } = response;
            console.log(data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };
  postUser();
  if (error) {
    toast.error(error?.message);
  }
  }, [from, user, navigate, error, loading, user1?.email, user1]);
  if (loading) {
    return <div>Loading</div>;
  }
  // console.log(user1);
  return (
    <section className="container">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-wide btn-primary"
      >
        Continue With google
      </button>
    </section>
  );
};

export default SocialLogin;
