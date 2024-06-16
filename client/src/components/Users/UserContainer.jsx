// src/components/PostContainer.js
import React from "react";
import { useUsers } from "../../hooks/useUsers";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import UserList from "./UserList";

const UserContainer = () => {
  const { users, usersStatus } = useUsers();

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Users</Typography>
      </Stack>

      <UserList users={users} usersStatus={usersStatus} />
      </Container>
  );
};

export default UserContainer;
