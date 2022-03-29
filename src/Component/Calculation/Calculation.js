import React from "react";
import "./Calculation.css";

const Calculation = (props) => {
  const { calculation } = props || {};

  //   console.log(calculation);

  // apply reduce for calculate total salary
  const totalSalaryReducer = (previous, current) => previous + current.salary;
  const totalSalary = calculation.reduce(totalSalaryReducer, 0);
  console.log(totalSalary);

  return (
    <div className="sticky-top p-4 m-1 calculation">
      <h1>
        <i className="fas fa-chalkboard-teacher"></i>
      </h1>
      <h5>Teacher Added : {calculation.length}</h5>
      <h5>Total Salary : ${totalSalary}</h5>

      {calculation.map((teacher) => (
        <div key={teacher.id} className="container text-center color">
          <img
            src={teacher.image}
            className="mx-auto w-50 d-block rounded-circle sm-img pt-1"
            alt=""
          />
          <h6 className="pb-1">{teacher.name}</h6>
        </div>
      ))}
    </div>
  );
};

export default Calculation;
