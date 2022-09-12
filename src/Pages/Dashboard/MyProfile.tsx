import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = (): JSX.Element => {
  const [user, loading, error] = useAuthState(auth);
  const {
    data: profile,
    isLoading,
    refetch,
  } = useQuery(
    ["userProfile"],
    async () =>
      await fetch(`http://localhost:5000/users?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );
  if (isLoading || loading) {
    return <div>Loading</div>;
  }
  console.log(profile);
  return (
    <div>
      <h2 className="font-bold text-4xl text-center">Profile</h2>
      <h2>Name: {profile?.name}</h2>
    </div>
  );
};

export default MyProfile;
