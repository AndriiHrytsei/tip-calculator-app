import css from "./App.module.css";
import CalcLayout from "../CalcLayout/CalcLayout.jsx";
import Calculator from "../Calculator/Calculator.jsx";
import Result from "../Result/Result.jsx";
import { useState } from "react";

const App = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [pplAmount, setPplAmount] = useState(1);
  const [customTip, setCustomTip] = useState("");

  // Instead of creating three functions that would read 
  // three inputs I combined it into one so as not to have three same functions
  
  const handleInputChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.currentTarget.value === "" || re.test(e.currentTarget.value)) {
      switch (e.currentTarget.name) {
        case "billAmount":
          setBill(e.currentTarget.value);          
          break;
        case "customTip":
          setCustomTip(e.currentTarget.value);
          setTip("");
          break;
        case "pplInput":
          setPplAmount(e.currentTarget.value);
          break;
        default:
          break;
      }
    }
  };

  const handleSetTip = (e) => {
    setTip(e.currentTarget.value);
    setCustomTip("");
  };

  const handleReset = () => {
    setBill("")
    setTip("")
    setPplAmount(1)
    setCustomTip("")
  }

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
