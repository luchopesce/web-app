import React from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
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
      {(usersStatus === "succeeded" || usersStatus === "connected") && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <UserTable user={user} key={user.id} />
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default UserList;
