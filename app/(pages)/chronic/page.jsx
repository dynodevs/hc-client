"use client";
import { useState } from "react";
import Bp from "../../(components)/(chronic)/bp";

function Page() {
  const [calculatorType, setCalculatorType] = useState("bmi");

  return (
    <div className="max-w-full mx-5 mr-5 mt-5 font-f3">
      <div className="mb-4 md:flex md:justify-center space-x-5">
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             calculatorType === "bmi" ? " text-c4 bg-t3" : " text-c3"
           }`}
          onClick={() => setCalculatorType("bmi")}
        >
          BP tracker
        </button>
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             calculatorType === "calorie" ? " text-c4 bg-t3" : " text-c3"
           }`}
          onClick={() => setCalculatorType("calorie")}
        >
          Cholestrol Tracker
        </button>
        <button
          className={`mr-2 bg-t2 border border-solid border-t3
           rounded-lg  hover:bg-c2 hover:text-t3
           font-semibold py-4 px-6 focus:outline-none focus:shadow-outline 
           transition duration-100 ease-in-out shadow-md select-none ${
             calculatorType === "bodyfat" ? " text-c4 bg-t3" : " text-c3"
           }`}
          onClick={() => setCalculatorType("bodyfat")}
        >
          Diabetes Tracker
        </button>
      </div>
      {calculatorType === "bmi" && <Bp />}
    </div>
  );
}
export default Page;
