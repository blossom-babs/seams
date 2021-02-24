import React from "react";
import styled from "styled-components";
import { MedicalContext } from "../../context/context";
import { BsDot } from "react-icons/bs";

const Content = ({ userImg, userName }) => {
  const { report } = React.useContext(MedicalContext);
  const { patient } = React.useContext(MedicalContext);
  return (
    <Wrapper>
      <div className="user-card rounded-lg h-30 py-4">
        <img className="user-img" src={userImg} alt={userName} />
        <h1 className="user-title pl-10">
          Welcome, <span className="font-bold text-base">{userName}</span>
        </h1>
        <p className="pl-10">Have a good day.</p>
      </div>

      <div className="report pt-10">
        <ul className="flex justify-between items-center">
          <li className="font-bold text-lg">Report</li>
          <li className="text-xs">This Month</li>
        </ul>
        <div className="report-cards pt-5">
          {report.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="schedule pt-10">
        <h1 className="schedule-title text-lg">Your next Patients</h1>
        <hr className="schedule-line" />

        <div className="schedule-cards pt-5">
          {patient.map((item) => (
            <PatientCard key={item.id} {...item} />
          ))}
        </div>
        <button className="px-4 py-4 schedule-btn">View More</button>
      </div>
    </Wrapper>
  );
};

const Card = ({ img: icon, title: name, number: num, color }) => {
  return (
    <article className="report-card py-2 px-4">
      <div className={`${color} report-icon`}>
        <span>{icon} </span>
      </div>
      <p className="text-sm py-1">{name}</p>
      <h4 className="text-lg">{num}</h4>
    </article>
  );
};

const PatientCard = ({ img, name, date, time }) => {
  return (
    <article className="patient-card px-2 py-4">
      <div className="flex justify-around shadow-large">
        <div>
          <img className="w-2/4 patient-img" src={img} alt={name} />
        </div>
        <div>
          <h1 className="font-bold">{name}</h1>
          <ul className="flex">
            <li className="text-xs">{date}</li>
            <li>
              <BsDot />
            </li>
            <li className="text-xs">{time}</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;

  .user-img {
    border-radius: 50%;
    width: 50px;
    position: absolute;
    bottom: 50px;
  }

  .user-card {
    background: var(--clr-primary-two);
    color: var(--clr-white);
    position: relative;
  }

  .user-title {
    font-family: var(--ff-heading);
  }

  .report-cards {
    display: grid;
    gap: 1rem;

    // smaller screens
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .report-card {
    background: var(--clr-white);
    border-radius: 20px;
  }

  .report-icon {
    width: fit-content;
    padding: 10px;
    color: white;
    border-radius: 10px;
  }

  .pry {
    background: #272c4c;
  }
  .green {
    background: green;
  }
  .pink {
    background: #ff1493;
  }
  .blue {
    background: blue;
  }

  .patient-img {
    border-radius: 50px;
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  .schedule-cards {
    display: grid;
    row-gap: 1rem;
  }

  .patient-card {
    background: #fff;
  }
  .schedule-title {
    font-family: var(--ff-heading);
  }

  .schedule-line {
    width: 5rem;
  }

  .schedule-btn {
    cursor: pointer;
    font-style: italic;
  }
`;

export default Content;
