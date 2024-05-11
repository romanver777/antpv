import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import Message from "../message/message";

type TProtected = {
  children: React.ReactNode;
  redirect: string;
};

function Protected({ children, redirect }: TProtected) {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const loading = useAppSelector((state) => state.auth.loading);

  useEffect(() => {
    if (!isAuth && !loading) {
      navigate(redirect, {state: {back: location.pathname}});
    }
  }, [isAuth, loading, navigate, redirect]);

  if (!isAuth || loading) {
    return <Message text="Загружаем.." />;
  } else {
    return children;
  }
}

export default Protected;
