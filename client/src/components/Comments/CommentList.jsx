// src/components/CommentList.js
import React from "react";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { fDate } from "../../utils/format-time";

const CommentList = ({ comments, status }) => {
  if (status === "loading") {
    return <CircularProgress />;
  }

  if (status === "failed") {
    return <Typography variant="body1">Failed to load comments.</Typography>;
  }

  if (status === "succeeded" && comments.length === 0) {
    return <Typography variant="body1">No hay comentarios.</Typography>;
  }

  return (
    <>
      {comments.map((comment, index) => (
        <div key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={"/static/images/avatar/1.jpg"} />
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
          {index + 1 < comments.length && (
            <Divider variant="inset" component="li" />
          )}
        </div>
      ))}
    </>
  );
};

export default CommentList;
