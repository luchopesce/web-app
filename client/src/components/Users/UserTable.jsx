import React from "react";
import Avatar from "@mui/material/Avatar";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const UserTable = ({ user }) => {
  const { id, firstName, picture } = user;

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        <Avatar alt={firstName} src={picture} />
      </TableCell>
      <TableCell>{firstName}</TableCell>
      <TableCell>{id}</TableCell>
    </TableRow>
  );
};

export default UserTable;
