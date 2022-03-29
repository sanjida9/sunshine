import React, { useEffect, useState } from "react";
import Calculation from "../Calculation/Calculation";
import Teacher from "../Teacher/Teacher";
import "./MainContainer.css";

const MainContainer = () => {
  const [teachers, setTeachers] = useState([]);

  //calculation state

  const [calculation, setCalculation] = useState([]);

  const handleCalculation = (teacher) => {
    const newCalculation = [...calculation, teacher];
    setCalculation(newCalculation);
    console.log(newCalculation);
  };
  useEffect(() => {
    fetch("/TeachersData.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div className="container p-0">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            {teachers.map((teacher) => (
              <Teacher
                handleCalculation={handleCalculation}
                key={teacher.id}
                teacher={teacher}
              ></Teacher>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <Calculation
            key={calculation.id}
            calculation={calculation}
          ></Calculation>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
