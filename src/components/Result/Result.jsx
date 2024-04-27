import css from "./Result.module.css";
import PropTypes from "prop-types";

const Result = ({ billInfo, resetFunc }) => {
  const totalTip =
    ((Number(billInfo.tip) / 100) * billInfo.bill) / billInfo.pplAmount;
  const total =
    ((Number(billInfo.tip) / 100 + 1) * billInfo.bill) / billInfo.pplAmount;

  return (
    <section className={css.resultSect}>
      <div className={css.tipAmountBox}>
        <div className={css.tipInfo}>
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <p className={css.totalTipAmount}>
          $
          {totalTip === Infinity || totalTip === 0
            ? "0.00"
            : totalTip.toFixed(2)}
        </p>
      </div>
      <div className={css.totalBillBox}>
        <div className={css.billInfo}>
          <p>Total</p>
          <span>/ person</span>
        </div>
        <p className={css.totalBillAmount}>${total === Infinity || total === 0 ? "0.00" : total.toFixed(2)}</p>
      </div>
      <button
        type="reset"
        disabled={
          totalTip === 0 ||
          total === 0 ||
          totalTip === Infinity ||
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
  resetFunc: PropTypes.func.isRequired
};
