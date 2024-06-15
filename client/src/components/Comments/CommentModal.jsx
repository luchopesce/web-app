import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCommentsByPostId,
  selectCommentsByPostId,
  selectCommentsStatusByPostId,
} from "../../features/posts/commentSlice";
import { fDate } from "../../utils/format-time";

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
  const dispatch = useDispatch();
  const comments = useSelector((state) =>
    selectCommentsByPostId(state, postId)
  );
  const status = useSelector((state) =>
    selectCommentsStatusByPostId(state, postId)
  );
  const [loadedComments, setLoadedComments] = useState(false); // Estado local para controlar si los comentarios han sido cargados
  //console.log(comments);
  useEffect(() => {
    if (isOpen && !loadedComments) {
      dispatch(fetchCommentsByPostId(postId));
      setLoadedComments(true);
    }
  }, [dispatch, isOpen, postId, loadedComments]);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <List sx={style}>
        {status === "loading" && (
            <CircularProgress/>
        )}
        {status === "failed" && (
          <Typography variant="body1">Failed to load comments.</Typography>
        )}
        {status === "succeeded" && comments.length === 0 && (
          <Typography variant="body1">No hay comentarios.</Typography>
        )}
        {status === "succeeded" &&
          comments.map((comment, index) => (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={"/static/images/avatar/1.jpg"}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={comment.owner.firstName}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {comment.message}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {fDate(comment.publishDate)}
                </Typography>
              </ListItem>
              {index + 1 < comments.length ? (
                <Divider variant="inset" component="li" />
              ) : null}
            </div>
          ))}
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
