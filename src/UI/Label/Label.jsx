import s from "./Label.module.css";

export const Label = ({ children }) => {
  return <label className={s.label}>{children}</label>;
};
