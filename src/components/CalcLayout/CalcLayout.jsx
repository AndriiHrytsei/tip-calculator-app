/* eslint-disable react/prop-types */
import css from "./CalcLayout.module.css"

const CalcLayout = ({ children }) => {
  return (
    <section className={css.calcLayout}>
      {children}
    </section>
  )
}

export default CalcLayout