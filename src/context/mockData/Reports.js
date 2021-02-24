import { FaUserPlus } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GiLoveInjection } from "react-icons/gi";
import { BiBed } from "react-icons/bi";

export const Reports = [
  {
    id: 1,
    img: <FaUserPlus />,
    title: "Patient",
    number: 1032,
    color: "pry",
  },
  {
    id: 2,
    img: <FiPhoneCall />,
    title: "Consultation",
    number: 207,
    color: "green",
  },
  {
    id: 3,
    img: <GiLoveInjection />,
    title: "Inject",
    number: 128,
    color: "pink",
  },
  {
    id: 4,
    img: <BiBed />,
    title: "Surgery",
    number: 48,
    color: "blue",
  },
];
