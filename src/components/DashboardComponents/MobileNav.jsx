import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Logout from "../Logout";
import styled from "styled-components";

const MobileNav = () => {
  const [toggle, setToggle] = React.useState(true);
  return (
    <Wrapper>
      <ul className="flex justify-between pt-6 pb-10">
        <li>
          <h1 className="text-lg">Dashboard</h1>
        </li>
        <li className="" onClick={() => setToggle(!toggle)}>
          {toggle ? <BiMenuAltRight /> : <AiOutlineCloseCircle />}
        </li>
      </ul>
      <div className={`side-nav ${toggle ? "" : "active"}`}>
        <ul className="py-3 px-3">
          <li className="py-3 px-3">Profile</li>
          <li className="py-3 px-3">Schedule</li>
          <li className="py-3 px-3">Patients</li>
          <li className="py-3 px-3">
            <FiLogOut />
            <Logout />
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
// --transition: all 0.3s linear;
const Wrapper = styled.header`
  margin: 0 auto;
  width: 90%;

  @media screen and (min-width: 768px) {
    display: none;
  }

  li:nth-child(1) {
    font-family: var(--ff-heading);
  }

  .side-nav {
    background: var(--clr-primary-two);
    color: var(--clr-white);
    transition: 1s ease-in-out;
    transform: translateX(1000px);
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 1;
  }

  .active {
    transform: translateX(0);
  }

  .icon {
    color: red;
  }
`;

export default MobileNav;
