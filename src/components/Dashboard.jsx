import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth0();
  // const { email, name, picture } = user;
  return (
    <>
      {isAuthenticated && (
        <div>
          <h1>this is the user's profile</h1>
          <h1>{user.email}</h1>
          <h1>{user.name}</h1>
          <img src={user.picture} alt={user.name} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
