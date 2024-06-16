import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, verifyAsync } from "../features/authSlice";

const AuthCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      // Disparar la acción de login para actualizar el estado de autenticación
      dispatch(login(token));

      // Disparar la acción asincrónica para verificar el token
      dispatch(verifyAsync(token))
        .then(() => {
          navigate("/home"); // Redirigir a la página de inicio después de verificar el token
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
          navigate("/"); // Manejo de error si hay problemas verificando el token
        });
    } else {
      console.error("No se encontró el token en la URL");
      navigate("/"); // Manejo de error si no se encuentra el token en la URL
    }
  }, [dispatch, navigate]);

  return <div>Autenticando...</div>;
};

export default AuthCallback;
