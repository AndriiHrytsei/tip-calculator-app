import React from "react";
import css from "./CalcLayout.module.css";

const CalcLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={css.main}>{children}</main>;
};

export default CalcLayout;
