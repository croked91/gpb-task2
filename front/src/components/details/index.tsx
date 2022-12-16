import { useAppDispatch } from "bll/hooks/useAppDispatch";
import { useAppSelector } from "bll/hooks/useAppSelector";
import { setIsError } from "bll/slices/error";

import { getServiceDetailTrigger } from "bll/slices/service";
import { Error } from "components/error";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { BASE_URL } from "shared/api";

export const Details = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { name, price, content } = useAppSelector((s) => s.service);
  const { isLoading } = useAppSelector((s) => s.isLoading);
  const { isError } = useAppSelector((s) => s.isError);

  useEffect(() => {
    dispatch(getServiceDetailTrigger(params.id || ""));
  }, []);

  if (isLoading) {
    return <MoonLoader speedMultiplier={0.5} />;
  }

  if (isError) {
    return (
      <Error
        onClick={() => dispatch(setIsError(false))}
        path={`${BASE_URL}/${params.id}/details`}
      />
    );
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>Стоимость: {price} руб.</h2>
      <p>Описание: {content}</p>
      <NavLink to="/">На главную</NavLink>
    </div>
  );
};
