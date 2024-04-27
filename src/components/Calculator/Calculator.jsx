import PropTypes from "prop-types";
import css from "./Calculator.module.css";

const Calculator = ({ inputChange, billInfo, handleSetTip }) => {
  const tipValues = [5, 10, 15, 25, 50];

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
          {tipValues.map((value) => (
            <li className={css.tipAmount} key={value}>
              <button value={value} type="button" onClick={handleSetTip} className={css.tipItem}>
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
        <label htmlFor="pplInput">Number of People</label>
        <input
          type="text"
          name="pplInput"
          id="pplInput"
          value={billInfo.pplAmount}
          onChange={inputChange}
        />
      </div>
    </section>
  );
};

export default Calculator;

Calculator.propTypes = {
  inputChange: PropTypes.func.isRequired,
  billInfo: PropTypes.object.isRequired,
  handleSetTip: PropTypes.func.isRequired,
};
