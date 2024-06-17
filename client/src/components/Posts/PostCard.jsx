import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { fDate } from "../../utils/format-time";
import { fShortenNumber } from "../../utils/format-number";
import Iconify from "../../helpers/iconify/iconify";
import SvgColor from "../../helpers/svg-color/svg-color";
import CommentModal from "../Comments/CommentModal";

export default function PostCard({ post }) {
  const { id, owner, image, text, publishDate, likes } = post;
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const renderAvatar = (
    <Avatar
      alt={owner.firstName}
      src={owner.picture}
      sx={{
        position: "absolute",
        bottom: (theme) => theme.spacing(-2),
        zIndex: 9,
        top: 24,
        left: 24,
        width: 40,
        height: 40,
      }}
    />
  );

  const renderCover = (
    <Box
      component="img"
      alt={text}
      src={image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        overflow: "hidden",
        WebkitLineClamp: 2,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        typography: "h5",
        height: 60,
        color: "common.white",
      }}
    >
      {text}
    </Link>
  );

  const renderInfo = (
    <Stack
      direction="row"
      justifyContent="space-between" // Cambiar a 'space-between' para alinear los elementos en los extremos
      flexWrap="wrap"
      spacing={1.5}
      sx={{
        mt: 3,
        color: "text.disabled",
      }}
    >
      {/* Fecha */}
      <Typography
        variant="caption"
        sx={{
          opacity: 0.48,
          color: "common.white",
        }}
      >
        {fDate(publishDate)}
      </Typography>
  
      {/* Iconos de comentarios y likes */}
      <Stack direction="row" spacing={1.5}>
        {/* Comentarios */}
        <Stack
          direction="row"
          onClick={toggleModal}
          sx={{
            opacity: 0.48,
            color: "common.white",
            cursor: "pointer",
          }}
        >
          <Iconify width={16} icon="eva:message-circle-fill" sx={{ mr: 0.5 }} />
          <Typography variant="caption">comments</Typography>
        </Stack>
  
        {/* Likes */}
        <Stack direction="row" sx={{ opacity: 0.48, color: "common.white" }}>
          <Iconify width={16} icon="mdi:heart" sx={{ mr: 0.5 }} />
          <Typography variant="caption">{fShortenNumber(likes)}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
  

  const renderName = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        opacity: 0.48,
        color: "common.white",
      }}
    >
      {owner.firstName}
    </Typography>
  );

  const renderShape = (
    <SvgColor
      color="paper"
      src="/assets/icons/shape-avatar.svg"
      sx={{
        width: 80,
        height: 36,
        zIndex: 9,
        bottom: -15,
        position: "absolute",
        color: "background.paper",
        display: "none",
      }}
    />
  );

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Box
          sx={{
            position: "relative",
            "&:after": {
              top: 0,
              content: "''",
              width: "100%",
              height: "100%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
            pt: {
              xs: "calc(100% * 4 / 3)",
              sm: "calc(100% * 3 / 4.66)",
            },
          }}
        >
          {renderShape}
          {renderAvatar}
          {renderCover}
          <Box
            onClick={toggleModal} // Aquí se abre el modal al hacer clic
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "transparent",
              cursor: "pointer",
            }}
          />
        </Box>

        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
            width: 1,
            bottom: 0,
            position: "absolute",
          }}
        >
          {renderName}
          {renderTitle}
          {renderInfo}
        </Box>
      </Card>

      <CommentModal isOpen={modalOpen} onClose={toggleModal} postId={id} />
    </Grid>
  );
}