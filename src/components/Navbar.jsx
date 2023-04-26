import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import PetsIcon from "@mui/icons-material/Pets";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";
const StyledToolbar=styled(Toolbar)`
background: black;

`
const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <PetsIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Dog-o-Clock
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
