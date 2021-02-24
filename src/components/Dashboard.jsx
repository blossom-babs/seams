import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MobileNav, Content } from "./DashboardComponents";
import styled from "styled-components";

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth0();
  // const { email, name, picture } = user;
  return (
    <>
      {isAuthenticated && (
        <Wrapper>
          <MobileNav />
          <Content userImg={user.picture} userName={user.name} />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  background: #eff1ff;
`;

export default Dashboard;
