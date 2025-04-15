import {
  Avatar,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const postItem = [
  {
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    img: "https://images.unsplash.com/photo-1742268350523-70a032f3520d?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: 184,
    comment: 10,
    view: 2.2,
    share: 24,
  },
  {
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    img: "https://images.unsplash.com/photo-1742412615574-ce65e63598d8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=m3wxmja3fdb8mhxwag90by1wywdlfhx8fgvufdb8fhx8fa%3d%3d",
    like: 100,
    comment: 5,
    view: 1.2,
    share: 14,
  },
  {
    caption:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. add 1 cup of frozen peas along with the mussels, if you like.",
    img: "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: 20,
    comment: 1,
    view: 1,
    share: 10,
  },
];

export const PostList = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      maxWidth={"600px"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        bgcolor: "#18191A", // Background color updated
        padding: "16px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Đoạn tạo bài viết */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#242526", // Background updated
          borderRadius: "10px",
          padding: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Avatar
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User Avatar"
            />
            <Typography
              variant="body1"
              fontWeight={"600"}
              color="#f5f5f5" // Text color updated
              sx={{ cursor: "pointer" }}
              onClick={handleClickOpen}
            >
              Forlan ơi, Bạn đang nghĩ gì thế?
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Dialog tạo bài viết */}
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: "#242526", // Background updated
            width: "400px",
            padding: "16px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          component="form"
        >
          <DialogTitle sx={{ fontWeight: 600, color: "#f5f5f5" }}>
            Tạo bài viết
          </DialogTitle>
          <DialogContent sx={{ paddingBottom: "8px" }}>
            <TextField
              label="Forlan ơi, Bạn đang nghĩ gì thế ?"
              name="content"
              fullWidth
              multiline
              rows={4}
              sx={{
                backgroundColor: "#2f3336", // Dark background for input area
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  color: "#f5f5f5", // Text color updated
                },
                "& .MuiInputLabel-root": {
                  color: "#808080", // Label color
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#808080", // Border color updated
                  },
                  "&:hover fieldset": {
                    borderColor: "#f5f5f5", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#f5f5f5", // Focused border color
                  },
                },
              }}
            />
          </DialogContent>
          <DialogActions sx={{ padding: "8px 16px" }}>
            <Button
              onClick={handleClose}
              sx={{
                color: "#808080",
                fontWeight: "bold",
                padding: "6px 12px",
              }}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              sx={{
                color: "#1877F2", // Blue button color
                fontWeight: "bold",
                padding: "6px 12px",
                ":hover": {
                  backgroundColor: "#1877F2", // Hover effect for button
                  color: "#fff",
                },
              }}
            >
              Đăng
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Danh sách bài viết */}
      {postItem.map((item, index) => {
        return (
          <Post
            key={index}
            caption={item.caption}
            img={item.img}
            like={item.like}
            comment={item.comment}
            view={item.view}
            share={item.share}
          />
        );
      })}
    </Box>
  );
};
