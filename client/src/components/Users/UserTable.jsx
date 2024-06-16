import React from "react";
import Avatar from "@mui/material/Avatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const UserTable = ({ user }) => {
  const { id, firstName, picture } = user;

  return (
    <Table aria-label="user table">
      <TableBody>
        <TableRow key={id}>
          <TableCell component="th" scope="row" style={{ width: "20%" }}>
            <Avatar alt={firstName} src={picture} />
          </TableCell>
          <TableCell style={{ width: "40%" }}>{firstName}</TableCell>
          <TableCell style={{ width: "40%" }}>{id}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default UserTable;
