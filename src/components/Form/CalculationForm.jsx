import React from "react";
import "./Form.css";
import CalcForm from "./CalcFormic";

const CalculationForm = (props) => {
  return (
    <>
      <div
        onClick={(e) => {
          e.target.classList.contains("modal") && props.showFunction(false);
        }}
        className={`modal h-screen w-screen bg-[#000000ce] fixed top-0 left-0 z-10 duration-200 ${
          props.show ? "show" : ""
        }`}
      >
        <div
          className={`w-[400px] h-screen absolute top-0 py-4 px-6 ${
            props.show ? "right-0" : "-right-full"
          } z-10 bg-gray-100 duration-200 pt-16`}
        >
          <div
            onClick={() => props.showFunction(false)}
            className="close w-[45px] h-[45px] rounded-full flex items-center justify-center bg-gray-300 absolute top-6 right-6 border-2 border-gray-400"
          >
            <i className="bx bx-x text-3xl text-gray-700"></i>
          </div>
          <h2 className="text-center font-bold text-blue-500 text-2xl mb-4 w-full">
            Kirim-Chiqim
          </h2>
          <CalcForm />
        </div>
      </div>
    </>
  );
};
export default CalculationForm;
