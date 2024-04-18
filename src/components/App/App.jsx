import css from "./App.module.css"
import CalcLayout from "../CalcLayout/CalcLayout";
import Calculator from "../Calculator/Calculator"
import Result from "../Result/Result"

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
