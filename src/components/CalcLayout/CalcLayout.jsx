/* eslint-disable react/prop-types */
import css from "./CalcLayout.module.css"

const CalcLayout = ({ children }) => {
  return (
    <main className={css.main}>
      {children}
    </main>
  )
}

export default CalcLayout