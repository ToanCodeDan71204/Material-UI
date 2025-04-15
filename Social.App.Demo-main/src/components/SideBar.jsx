import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  const contacts = [
    {
      name: "Diogo Forlan",
      username: "@forlan77",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Jane Smith",
      username: "@jane123",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe2",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe3",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe4",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  // State to hold the search input
  const [searchQuery, setSearchQuery] = useState("");

  // Filter contacts based on search input
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "360px",
          height: "100%",
          bgcolor: "#18191A", // Dark background for sidebar
          padding: "20px", // Added padding for neatness
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Softer shadow
        }}
      >
        {/* Thanh tìm kiếm */}
        <TextField
          placeholder="Tìm kiếm"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#808080" }} />
              </InputAdornment>
            ),
            style: {
              color: "#f5f5f5", // Text color
              backgroundColor: "#242526", // Dark background for search box
              borderRadius: "25px",
              paddingLeft: "15px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" }, // Remove the border
            },
            marginBottom: "20px", // Add space below the search bar
          }}
        />

        {/* Danh sách người liên hệ gần đây */}
        <Box
          sx={{
            backgroundColor: "#242526", // Dark background for the contact list
            borderRadius: "15px",
            padding: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "30px", // Spacing at the bottom
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "12px", // Add space between title and list
              color: "#f5f5f5",
            }}
          >
            Người liên hệ gần đây
          </Typography>

          {/* Hiển thị danh sách người dùng hoặc thông báo không tìm thấy */}
          {filteredContacts.length > 0 ? (
            <List>
              {filteredContacts.map((contact, index) => (
                <ListItem
                  key={index}
                  sx={{
                    padding: "12px 0",
                    "&:hover": {
                      backgroundColor: "#333", // Darker background on hover
                      cursor: "pointer",
                    },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar alt={contact.name} src={contact.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color: "#f5f5f5", // Name text color
                          fontWeight: "600",
                        }}
                      >
                        {contact.name}
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ color: "#808080" }}>
                        {contact.username}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography sx={{ color: "#808080", fontStyle: "italic" }}>
              Không tìm thấy người dùng
            </Typography>
          )}

          <Box sx={{ marginTop: "12px" }}>
            <Link
              href="#"
              sx={{
                color: "#6ec207", // Green link color
                fontWeight: "bold",
                textDecoration: "none",
                ":hover": {
                  textDecoration: "underline", // Underline on hover
                },
              }}
            >
              <Typography>Xem thêm</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
