import { useAppDispatch } from "bll/hooks/useAppDispatch";
import { useAppSelector } from "bll/hooks/useAppSelector";
import { Details } from "components/details";
import { Services } from "components/services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BASE_URL } from "shared/api";

export default function App() {
  const dispatch = useAppDispatch();
  const services = useAppSelector((s) => s.services);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services />}></Route>
        {services.map(({ id }) => (
          <Route
            key={id}
            path={`${BASE_URL}/:id/details`}
            element={<Details />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
