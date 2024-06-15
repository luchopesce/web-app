// src/components/CommentModal.js
import React from "react";
import Modal from "@mui/material/Modal";
import { useComments } from "../../hooks/useComments";
import CommentList from "./CommentList";
import PropTypes from "prop-types";
import List from "@mui/material/List";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0.5px solid #000",
  boxShadow: 24,
  p: 4,
};

const CommentModal = ({ isOpen, onClose, postId }) => {
  const { comments, status } = useComments(postId, isOpen);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
     <List sx={style}>
        <CommentList comments={comments} status={status} />
      </List>
    </Modal>
  );
};

CommentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentModal;
