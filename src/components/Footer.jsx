import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "black",
      }}>
      <BottomNavigation
        sx={{ backgroundColor: "black" }}
        showLabels
        // value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHubIcon />}
          sx={{ color: "white" }}
          href="https://github.com/jAndreassi"
          target="_blank"
        />
        <BottomNavigationAction
          label="Twitter"
          icon={<TwitterIcon />}
          sx={{ color: "white" }}
          href="https://twitter.com/jaredandreassi"
          target="_blank"
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedInIcon />}
          sx={{ color: "white" }}
          href="https://www.linkedin.com/in/jared-andreassi"
          target="_blank"
        />
      </BottomNavigation>
    </Box>
  );
}
