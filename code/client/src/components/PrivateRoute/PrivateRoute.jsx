import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const [aviso, setAviso] = useState(false);

  if (!usuario || usuario.tipo !== "admin") {
    setAviso(true);
    setTimeout(() => {
      setAviso(false);
    }, 3000);
    return <Navigate to="/homepage" />;
  }

  return (
    <>
      {aviso && <p className="acesso-negado">Acesso negado! Somente administradores podem acessar esta página.</p>}
      <Outlet />
    </>
  );
};

export default PrivateRoute;
