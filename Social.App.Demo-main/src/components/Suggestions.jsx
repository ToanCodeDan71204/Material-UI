import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import "../styles/Suggestions.css";

// Mock data for suggestions
const suggestedUsers = [
  {
    id: 1,
    name: "John Doe",
    username: "@johndoe",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "@janesmith",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    username: "@mikejohnson",
    avatar: "https://mui.com/static/images/avatar/3.jpg",
  },
  // Add more users as needed
];

const Suggestions = () => {
  const [following, setFollowing] = React.useState({});

  const handleFollow = (userId) => {
    setFollowing((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  return (
    <Box
      maxWidth={"380px"} // Increased width for sidebar
      sx={{
        padding: "20px", // Increased padding for better spacing
        backgroundColor: "#242526", // Darker background for the sidebar
        borderRadius: "15px",
        position: "fixed",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        top: "10%",
        right: "10px", // Positioning the sidebar in the top right corner
        width: "350px", // Width remains larger for spacious layout
      }}
    >
      {/* Header for Suggestions */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem", // Increased font size for title
            color: "#f5f5f5",
          }}
        >
          Gợi ý cho bạn
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            color: "#6ec207",
            fontSize: "1rem", // Larger font size
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" }, // Hover effect
          }}
        >
          Xem tất cả
        </Typography>
      </Box>

      {/* User List */}
      <List sx={{ width: "100%", padding: 0 }}>
        {suggestedUsers.map((user) => (
          <ListItem
            key={user.id}
            sx={{
              px: 0,
              py: 2, // Increased padding for better spacing
              "&:hover": {
                backgroundColor: "#393939", // Hover background color for each item
                cursor: "pointer",
              },
            }}
          >
            <ListItemAvatar>
              <Avatar src={user.avatar} sx={{ width: 60, height: 60 }} /> {/* Increased Avatar size */}
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="h6" // Larger font size for name
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem", // Increased font size for name
                    color: "#f5f5f5",
                  }}
                >
                  {user.name}
                </Typography>
              }
              secondary={
                <Typography
                  variant="body1" // Increased font size for username
                  sx={{
                    fontSize: "1rem", // Larger font size for username
                    color: "#808080",
                  }}
                >
                  {user.username}
                </Typography>
              }
            />
            <ListItemSecondaryAction>
              <Button
                variant="contained"
                size="medium" // Increased button size
                sx={{
                  color: following[user.id] ? "#808080" : "#f5f5f5",
                  backgroundColor: following[user.id] ? "#6ec207" : "#1877F2",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem", // Increased font size for button
                  borderRadius: "25px",
                  padding: "8px 20px", // Increased padding for button
                  "&:hover": {
                    backgroundColor: following[user.id] ? "#5dbd06" : "#0a67a1",
                  },
                }}
                onClick={() => handleFollow(user.id)}
              >
                {following[user.id] ? "Đã theo dõi" : "Theo dõi"}
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Suggestions;
