import css from "./Result.module.css";
import PropTypes from "prop-types";

const Result = ({ billInfo, resetFunc }) => {
  const totalTip = billInfo.pplAmount[0] === "0" ? "0.00" : ((Number(billInfo.tip) / 100) * billInfo.bill) / billInfo.pplAmount;
  const total = billInfo.pplAmount[0] === "0" ? "0.00" : ((Number(billInfo.tip) / 100 + 1) * billInfo.bill) / billInfo.pplAmount;


  return (
    <section className={css.resultSect}>
      <div className={css.tipAmountBox}>
        <div className={css.tipInfo}>
          <p className={css.title}>Tip Amount</p>
          <span className={css.perPerson}>/ person</span>
        </div>
        <p className={css.totalAmount}>
          $
          {totalTip === Infinity || totalTip === 0 || totalTip[0] === "0" || isNaN(totalTip) 
            ? "0.00"
            : totalTip.toFixed(2)}
        </p>
      </div>
      <div className={css.totalBillBox}>
        <div className={css.billInfo}>
          <p className={css.title}>Total</p>
          <span className={css.perPerson}>/ person</span>
        </div>
        <p className={css.totalAmount}>
          $
          {total === Infinity || total === 0 || total[0] === "0" || isNaN(totalTip)
            ? "0.00"
            : total.toFixed(2)}
        </p>
      </div>
      <button
        type="reset"
        disabled={
          totalTip === 0 &&
          total === 0 ||
          totalTip === Infinity &&
          total === Infinity
            ? true
            : false
        }
        onClick={resetFunc}
        className={css.resetBtn}
      >
        RESET
      </button>
    </section>
  );
};

export default Result;

Result.propTypes = {
  billInfo: PropTypes.object.isRequired,
  resetFunc: PropTypes.func.isRequired,
};
