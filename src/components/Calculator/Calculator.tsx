import css from "./Calculator.module.css";
import CalculatorPropsInterface from "../../types/calculatorProps";
import TipValue from "../../types/tipValue";

const Calculator = ({
  inputChange,
  billInfo,
  handleSetTip,
  handlePplAmount,
}: CalculatorPropsInterface) => {
  const tipValues: TipValue = [5, 10, 15, 25, 50];

  return (
    <section className={css.calcSect}>
      <div className={css.billBox}>
        <label htmlFor="billAmount">Bill</label>
        <input
          type="text"
          name="billAmount"
          id="billAmount"
          value={billInfo.bill}
          onChange={inputChange}
          placeholder="0"
        />
      </div>
      <div className={css.tipPerceantage}>
        <p>Select Tip %</p>
        <ul className={css.tipList}>
          {tipValues.map((value: number) => (
            <li className={css.tipAmount} key={value}>
              <button
                value={value}
                type="button"
                onClick={handleSetTip}
                className={css.tipItem}
              >
                {value}%
              </button>
            </li>
          ))}
          <li className={css.tipAmount}>
            <input
              type="text"
              name="customTip"
              id="customTip"
              placeholder="Custom"
              value={billInfo.customTip}
              onChange={inputChange}
              maxLength={2}
              className={css.customTip}
            />
          </li>
        </ul>
      </div>
      <div className={css.numOfPpl}>
        <div>
          <label htmlFor="pplInput">Number of People</label>
          {Number(billInfo.pplAmount[0]) === 0 ||
          billInfo.pplAmount.length === 0 ? (
            <p className={css.cantBeZero}>Can&apos;t be zero</p>
          ) : (
            <></>
          )}
        </div>
        <input
          type="text"
          name="pplInput"
          id="pplInput"
          value={billInfo.pplAmount}
          onChange={handlePplAmount}
          className={`${css.numOfPplInput} ${
            Number(billInfo.pplAmount[0]) === 0 ||
            billInfo.pplAmount.length === 0
              ? css.zeroPpl
              : ""
          }`}
        />
      </div>
    </section>
  );
};

export default Calculator;
