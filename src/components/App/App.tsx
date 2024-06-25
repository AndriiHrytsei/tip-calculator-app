import css from "./App.module.css";
import CalcLayout from "../CalcLayout/CalcLayout.jsx";
import Calculator from "../Calculator/Calculator.jsx";
import Result from "../Result/Result.jsx";
import React, { useState } from "react";

const App = () => {
  const [bill, setBill] = useState<string>("");
  const [tip, setTip] = useState<string>("");
  const [pplAmount, setPplAmount] = useState<string>("1");
  const [customTip, setCustomTip] = useState<string>("");

  // Instead of creating three functions that would read
  // three inputs I combined it into one so as not to have three same functions

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const re: RegExp = /^(?!(.*\.){2})[0-9.\b]+$/;
    if (e.currentTarget.value === "" || re.test(e.currentTarget.value)) {
      switch (e.currentTarget.name) {
        case "billAmount":
          setBill(e.currentTarget.value);
          break;
        case "customTip":
          setCustomTip(e.currentTarget.value);
          setTip("");
          break;
        default:
          break;
      }
    }
  };

  const handlePplInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const re: RegExp = /^[0-9\b]+$/;
    if (e.currentTarget.value === "" || re.test(e.currentTarget.value)) {
      setPplAmount(e.currentTarget.value);
    }
  };

  const handleSetTip = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setTip(e.currentTarget.value);
    setCustomTip("");
  };

  const handleReset = (): void => {
    setBill("");
    setTip("");
    setPplAmount("1");
    setCustomTip("");
  };

  return (
    <>
      <h1 className={css.heading}>
        SPLI
        <br />
        TTER
      </h1>
      <CalcLayout>
        <Calculator
          inputChange={handleInputChange}
          billInfo={{
            bill: bill,
            tip: tip,
            pplAmount: pplAmount,
            customTip: customTip,
          }}
          handleSetTip={handleSetTip}
          handlePplAmount={handlePplInputChange}
        />
        <Result
          billInfo={{
            bill: bill,
            tip: tip === "" ? customTip : tip,
            pplAmount: pplAmount,
          }}
          resetFunc={handleReset}
        />
      </CalcLayout>
    </>
  );
};

export default App;
