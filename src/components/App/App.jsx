import css from "./App.module.css"
import CalcLayout from "../CalcLayout/CalcLayout.jsx";
import Calculator from "../Calculator/Calculator.jsx"
import Result from "../Result/Result.jsx"

const App = () => {
  return (
    <>
      <h1 className={css.heading}>SPLI<br/>TTER</h1>
      <CalcLayout>
        <Calculator />
        <Result />
      </CalcLayout>
    </>
  );
};

export default App;
