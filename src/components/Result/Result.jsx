import css from "./Result.module.css";
import PropTypes from "prop-types";

const Result = ({ billInfo }) => {
  const totalTip = (Number(billInfo.tip) / 100) * billInfo.bill;
  const total = (Number(billInfo.tip) / 100 + 1) * billInfo.bill;

  console.log(`totalTip: ${totalTip}`);
  console.log(`total: ${total}`);
  console.log(`ppl: ${billInfo.pplAmount}`);

  console.log(totalTip / Number(billInfo.pplAmount));

  return (
    <section>
      <div className={css.tipAmountBox}>
        <div>
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <p>
          $
          {totalTip / Number(billInfo.pplAmount) === Infinity ||
          totalTip / Number(billInfo.pplAmount) === 0
            ? "0.00"
            : totalTip / Number(billInfo.pplAmount)}
        </p>
      </div>
      <div className={css.totalBox}>
        <div>
          <p>Total</p>
          <span>/ person</span>
        </div>
        <p>
          $
          {total / Number(billInfo.pplAmount) === Infinity ||
          total / Number(billInfo.pplAmount) === 0
            ? "0.00"
            : total / Number(billInfo.pplAmount)}
        </p>
      </div>
    </section>
  );
};

export default Result;

Result.propTypes = {
  billInfo: PropTypes.object.isRequired
}