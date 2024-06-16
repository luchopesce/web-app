import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  subscribeToUsers,
  selectAllUsers,
  selectUsersStatus,
} from "../features/usersSlice.js";
import socket from "../api/socket.js";

export const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector(selectUsersStatus);

  useEffect(() => {
    const handleConnect = () => {
      console.log("Socket connected.");
      socket.emit("getUsers");
    };

    const handleDisconnect = () => {
      console.log("Socket disconnected.");
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    if (socket.connected) {
      handleConnect();
    }

    dispatch(subscribeToUsers());

    if (usersStatus === "idle" || usersStatus === "disconnected") {
      dispatch(fetchUsers());
    }

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("users");
    };
  }, [dispatch, usersStatus]);

  return {
    users,
    usersStatus,
  };
};
