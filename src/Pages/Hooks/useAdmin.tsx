import React, { useState } from "react";

const useAdmin = (user: any) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  const email = user?.email;
  if (email) {
    const getUser = async () => {
      await fetch(`http://localhost:5000/users?email=${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setAdmin(data?.role === "admin");
          setAdminLoading(false);
        });
    };
    getUser();
  }

  return [admin, adminLoading];
};

export default useAdmin;
