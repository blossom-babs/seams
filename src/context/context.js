import React from "react";
import { Reports, Patients } from "./mockData";

const MedicalContext = React.createContext();

const MedicalProvider = ({ children }) => {
  const [report] = React.useState(Reports);
  const [patient] = React.useState(Patients);

  return (
    <MedicalContext.Provider value={{ report, patient }}>
      {children}
    </MedicalContext.Provider>
  );
};

export { MedicalContext, MedicalProvider };
