import { FC } from "react";
import { NavLink } from "react-router-dom";
import { IError } from "./interface";
import s from "./styles.module.css";

export const Error: FC<IError> = ({ path, onClick }) => {
  return (
    <div className={s.error}>
      <span className={s.error__message}>Произошла ошибка!</span>
      <NavLink className={s.error__link} onClick={onClick} to={path}>
        Повторить запрос
      </NavLink>
    </div>
  );
};
