import { useDispatch, useSelector } from "react-redux";
import {
  selectAllUsers,
  selectUsersStatus,
  fetchUsers,
} from "../features/usersSlice.js";
import { useEffect } from "react";

export const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector(selectUsersStatus);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return {
    users,
    usersStatus,
  };
};
