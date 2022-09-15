import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
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
  console.log(user);
  const updateProfile = async (event: any) => {
    event.preventDefault();
    const name = event?.target.name.value;
    const address = event?.target.address.value;

    const phone = event?.target.phone.value;

    const url = `http://localhost:5000/users/${profile._id}`;
    await axios
      .put(
        url,
        {
          name: name,
          address: address,
          phone: phone,
        },
        {
          headers: {
            authorization: `${user?.email} ${localStorage.getItem(
              "accessToken"
            )}`,
          },
        }
      )
      .then((response: any) => {
        const { data } = response;
        // console.log(data);
        if (data) {
          toast.success("Profile updated");
          refetch();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className="">
      <h2 className="font-bold text-4xl text-center">Profile</h2>
      <div className="card mx-auto w-96 bg-base-100 shadow-xl mt-10">
        <div className="card-body">
          <h2 className="mx-auto card-title">Profile:</h2>
          <div className="avatar flex justify-center">
            <div className="w-24 rounded">
              <img src={`${user?.photoURL}`} alt="user" />
            </div>
          </div>
          <p>Name: {profile?.name || ""}</p>
          <p>Email: {profile?.email || ""}</p>
          <p>Shipping address: {profile?.address || ""}</p>
          <p>Phone: {profile?.phone || ""}</p>
        </div>
        <label htmlFor="my-modal-6" className="btn btn-primary modal-button">
          Update Profile
        </label>
      </div>
      {/*  */}

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/*  */}
          <div className="card mt-10 w-96 bg-base-100 mx-auto shadow-xl">
            <div className="card-body">
              <h2 className="card-title mx-auto">Update Profile</h2>
              <form onSubmit={(event) => updateProfile(event)}>
                <label htmlFor="name">Name:</label>
                <input
                  defaultValue={profile?.name}
                  name="name"
                  type="text"
                  placeholder="Update your name"
                  className="my-2 input input-bordered input-success w-full max-w-xs"
                />
                <label htmlFor="address">Shipping address:</label>
                <input
                  defaultValue={profile?.address}
                  name="address"
                  type="text"
                  placeholder="Update your address"
                  className="my-2 input input-bordered input-success w-full max-w-xs"
                />

                <label htmlFor="phone">Phone:</label>
                <input
                  defaultValue={profile?.phone}
                  name="phone"
                  type="number"
                  placeholder="Update phone number"
                  className="my-2 input input-bordered input-success w-full max-w-xs"
                />
                <label
                  htmlFor="my-modal-6"
                  className="card-actions justify-center"
                >
                  <input
                    type="submit"
                    value="Update"
                    className="mt-4 btn btn-primary modal-action"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </section>
  );
};

export default MyProfile;
