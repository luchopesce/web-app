import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import UserList from "../Users/UserList";
import {
  selectIsAuthenticated,
  selectUserData,
  selectToken,
  setUserData,
} from "../../features/authSlice";
import { apiServerInstance } from "../../api/api";

const Protected = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = useSelector(selectToken);
  console.log(userData);

  useEffect(() => {
    // Solo realiza la carga de datos si el usuario está autenticado y no hay datos de usuario en el estado

    const fetchUserData = async () => {
      try {
        const response = await apiServerInstance.get("/auth/protected", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        if (response.status === 200) {
          dispatch(
            setUserData({
              firstName: response.data.user.name,
              picture: response.data.user.photo,
              id: response.data.user.email,
            })
          );
        } else {
          throw new Error("No se pudo obtener los datos del usuario");
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error.message);
        // Maneja el error adecuadamente, por ejemplo, redirigiendo al usuario a una página de error o mostrando un mensaje
      }
    };

    if (isAuthenticated && !userData) {
      fetchUserData();
    }
  }, [dispatch, isAuthenticated, token]); // Dependencias solo de dispatch, isAuthenticated y token

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Protected</Typography>
      </Stack>
      {userData && <UserList users={[userData]} usersStatus="connected" />}
    </Container>
  );
};

export default Protected;
