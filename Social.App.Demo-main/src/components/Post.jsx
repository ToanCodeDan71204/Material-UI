import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

export default function Post({ caption, img, like, comment, view, share }) {
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  return (
    <Card
      sx={{
        maxWidth: 600,
        bgcolor: "#1E1E1E",
        borderRadius: 2,
        color: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
        margin: "auto",
        mb: 3,
      }}
    >

      <CardHeader
        avatar={
          <Avatar
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
            alt="User Avatar"
            sx={{ width: 40, height: 40 }}
          />
        }
        action={
          <IconButton>
            <MoreHorizIcon sx={{ color: "#aaa" }} />
          </IconButton>
        }
        title={
          <Typography variant="subtitle2" fontWeight="bold" color="#fff">
            Diogo Forlan
          </Typography>
        }
        subheader={
          <Typography variant="caption" color="#999">
            9 giờ trước
          </Typography>
        }
      />

      <CardContent sx={{ px: 2, pt: 0 }}>
        <Typography variant="body2" color="#e0e0e0">
          {caption}
        </Typography>
      </CardContent>

      <Box sx={{ px: 2, pt: 1 }}>
        <CardMedia
          component="img"
          image={img}
          alt="Post"
          sx={{
            borderRadius: "10px",
            maxHeight: 500,
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          pt: 1,
          pb: 2,
        }}
      >
        {/* LIKE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton onClick={handleLike}>
            {isLiked ? (
              <FavoriteIcon sx={{ color: "#e53935" }} />
            ) : (
              <FavoriteBorderOutlinedIcon sx={{ color: "#aaa" }} />
            )}
          </IconButton>
          <Typography variant="body2" sx={{ color: "#ccc" }}>
            Like • {likes}K
          </Typography>
        </Box>

        {/* COMMENT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ChatBubbleOutlineOutlinedIcon sx={{ color: "#aaa" }} />
          <Typography variant="body2" sx={{ color: "#ccc" }}>
            Comment • {comment}K
          </Typography>
        </Box>

        {/* VIEW */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TrendingUpOutlinedIcon sx={{ color: "#aaa" }} />
          <Typography variant="body2" sx={{ color: "#ccc" }}>
            View • {view}M
          </Typography>
        </Box>

        {/* SHARE */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ShareOutlinedIcon sx={{ color: "#aaa" }} />
          <Typography variant="body2" sx={{ color: "#ccc" }}>
            Share • {share}K
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}

