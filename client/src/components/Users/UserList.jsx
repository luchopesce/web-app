
import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import UserTable from "./UserTable";
import { CircularProgress } from "@mui/material";
import Paper from "@mui/material/Paper";

const UserList = ({ users, usersStatus }) => {
  return (
    <TableContainer component={Paper}>
      {usersStatus === "loading" && <CircularProgress />}
      {usersStatus === "failed" && (
        <Typography variant="h6">
          Failed to load users. Please try again later.
        </Typography>
      )}
      {usersStatus === "succeeded" && users.length === 0 && (
        <Typography variant="h6">No users available.</Typography>
      )}
      {(usersStatus === "succeeded" || usersStatus === "connected") &&
        users.map((user) => <UserTable user={user} key={user.id} />)}
    </TableContainer>
  );
};

export default UserList;
