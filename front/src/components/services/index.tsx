import { useAppDispatch } from "bll/hooks/useAppDispatch";
import { useAppSelector } from "bll/hooks/useAppSelector";
import { getServicesTrigger } from "bll/slices/services";
import { Error } from "components/error";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { BASE_URL } from "shared/api";
import s from "./styles.module.css";

export const Services = () => {
  const services = useAppSelector((s) => s.services);
  const { isLoading } = useAppSelector((s) => s.isLoading);
  const { isError } = useAppSelector((s) => s.isError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getServicesTrigger());
  }, []);

  if (isError) {
    return <Error path="/" onClick={() => dispatch(getServicesTrigger())} />;
  }

  if (isLoading) {
    return <MoonLoader speedMultiplier={0.5} />;
  }

  return (
    <div className={s.services}>
      <Outlet />
      {services.map(({ id, name }) => (
        <Link key={id} to={`${BASE_URL}/${id}/details`}>
          {name}
        </Link>
      ))}
    </div>
  );
};
