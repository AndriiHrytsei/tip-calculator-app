import css from "./App.module.css";
import CalcLayout from "../CalcLayout/CalcLayout.jsx";
import Calculator from "../Calculator/Calculator.jsx";
import Result from "../Result/Result.jsx";
import { useState } from "react";

const App = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [pplAmount, setPplAmount] = useState(1);

  return (
    <>
      <h1 className={css.heading}>
        SPLI
        <br />
        TTER
      </h1>
      <CalcLayout>
        <Calculator
          getBill={(data) => setBill(data)}
          getTip={(data) => setTip(data)}
          getPplNum={(data) => setPplAmount(data)}
        />
        <Result billInfo={{ bill: bill, tip: tip, pplAmount: pplAmount }} />
      </CalcLayout>
    </>
  );
};

export default App;
