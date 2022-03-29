import React from "react";
import "./Teacher.css";

const Teacher = (props) => {
  const { name, gender, salary, image, subject, age } = props.teacher || {};
  return (
    <div className="col-md-4">
      <div className="">
        <div className="size my-2 card-des">
          <img
            src={image}
            className="mx-auto img-fluid w-75 d-block rounded-circle image pt-2"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Name : {name}</h5>
            <h5 className="card-title">Age : {age}</h5>
            <h5 className="card-title">Gender : {gender}</h5>
            <h5 className="card-title"> Subject : {subject}</h5>
            <h5 className="card-title">Fee : $ {salary}</h5>
          </div>
          <div className="text-center pb-2">
            <button
              onClick={() => props.handleCalculation(props.teacher)}
              className="btn btn-dark px-5  mb-2"
            >
              <i className="fas fa-user-circle"> </i> Add to list
            </button>
            <div>
              <h3 className="text-dark">
                <i className="fab fa-youtube mx-2"></i>
                <i className="fab fa-facebook mx-2"></i>
                <i className="fab fa-twitter mx-2"></i>
                <i className="fab fa-instagram"></i>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
