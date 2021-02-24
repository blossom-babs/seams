import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <p>
          Built with <a href="https://reactjs.org/">ReactJs</a> .
          <a href="https://reactjs.org/docs/context.html">context Api</a> .{" "}
          <a href="https://react-icons.github.io/">React-Icon</a> .{" "}
          <a href="https://auth0.com/">Auth0</a> .{" "}
          <a href="https://tailwindcss.com/">TailwindCSS</a> .
          <a href="https://styled-components.com/">Styled Components</a>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-primary-two);
  color: var(--clr-white);

  position: fixed;
  bottom: 0;

  .container {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
  }
`;

export default Footer;
