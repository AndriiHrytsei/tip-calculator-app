import billInfoInterface from "./billInfo";

interface CalculatorPropsInterface {
  inputChange: React.ChangeEventHandler<HTMLInputElement>;
  billInfo: billInfoInterface;
  handleSetTip: React.MouseEventHandler<HTMLButtonElement>;
  handlePplAmount: React.ChangeEventHandler<HTMLInputElement>;
}

export default CalculatorPropsInterface

