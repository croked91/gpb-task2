import { useAppDispatch } from "bll/hooks/useAppDispatch";
import { useAppSelector } from "bll/hooks/useAppSelector";
import { getServiceDetailTrigger } from "bll/slices/service";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";

export const Details = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { name, price, content } = useAppSelector((s) => s.service);
  const { isLoading } = useAppSelector((s) => s.isLoading);

  useEffect(() => {
    dispatch(getServiceDetailTrigger(params.id || ""));
  }, []);

  if (isLoading) {
    return <MoonLoader speedMultiplier={0.5} />;
  }

  return (
    <div>
      <h1>{name}</h1>
      <h2>Стоимость: {price} руб.</h2>
      <p>Описание: {content}</p>
    </div>
  );
};
