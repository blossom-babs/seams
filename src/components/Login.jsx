import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Logo from "../assets/logo.jpeg";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <Wrapper>
          <div className="container">
            <div>
              <img src={Logo} alt="Logo" />
              <h1 className="font-bold text-xl pt-10">
                Welcome to your portal
              </h1>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  background: var(--clr-white);
  height: 100vh;

  .container {
    display: flex;
    justify-content: center;

    padding-top: 50px;
  }

  h1 {
    text-align: center;
  }

  button {
    background: var(--clr-primary-two);
    color: var(--clr-white);
    padding: 1rem 2rem;
    border-radius: 20px;
  }

  img {
    width: 100px;
    border-radius: 50%;
  }
`;

export default Login;
