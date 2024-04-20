import { useState } from "react";
import PropTypes from "prop-types";
import css from "./Calculator.module.css";

const Calculator = ({ getBill, getTip, getPplNum }) => {
  const [bill, setBill] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [pplAmount, setPplAmount] = useState(1);

  const handleSetTip = (e) => {
    setTip(e.currentTarget.value);
    getTip(e.currentTarget.value);
    setCustomTip("");
  };

  const handleInputChange = (e) => {
    const re = /^[0-9.\b]+$/;
    if (e.currentTarget.value === "" || re.test(e.currentTarget.value)) {
      if (e.currentTarget.name === "billAmount") {
        setBill(e.currentTarget.value);
        getBill(e.currentTarget.value);
      } else if (e.currentTarget.name === "customTip") {
        setCustomTip(e.currentTarget.value);
        getTip(e.currentTarget.value);
        setTip("");
      } else if (e.currentTarget.name === "pplInput") {
        setPplAmount(e.currentTarget.value);
        getPplNum(e.currentTarget.value);
      }
    }
  };

  return (
    <section className={css.calcSect}>
      <div className={css.billBox}>
        <label htmlFor="billAmount">Bill</label>
        <input
          type="text"
          name="billAmount"
          id="billAmount"
          value={bill}
          onInput={handleInputChange}
        />
      </div>
      <div className={css.tipPerceantage}>
        <p>Select Tip %</p>
        <ul className={css.tipList}>
          <li className={css.tipAmount}>
            <button value={5} type="button" onClick={handleSetTip}>
              5%
            </button>
          </li>
          <li className={css.tipAmount}>
            <button value={10} type="button" onClick={handleSetTip}>
              10%
            </button>
          </li>
          <li className={css.tipAmount}>
            <button value={15} type="button" onClick={handleSetTip}>
              15%
            </button>
          </li>
          <li className={css.tipAmount}>
            <button value={25} type="button" onClick={handleSetTip}>
              25%
            </button>
          </li>
          <li className={css.tipAmount}>
            <button value={50} type="button" onClick={handleSetTip}>
              50%
            </button>
          </li>
          <li className={css.tipAmount}>
            <input
              type="text"
              name="customTip"
              id="customTip"
              placeholder="Custom"
              value={customTip}
              onChange={handleInputChange}
              maxLength={2}
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
          value={pplAmount}
          onChange={handleInputChange}
        />
      </div>
    </section>
  );
};

export default Calculator;

Calculator.propTypes = {
  getBill: PropTypes.func.isRequired,
  getTip: PropTypes.func.isRequired,
  getPplNum: PropTypes.func.isRequired
};
