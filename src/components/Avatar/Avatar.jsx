import * as React from 'react';
import { Link, NavLink } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Menu, MenuItem } from '@mui/material';
import { IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

export default function FallbackAvatars() {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack direction="row" spacing={2}>

      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        color="inherit"
      >
      <NavLink className="nav-link" to="/account/login"><Avatar src="/broken-image.jpg" /></NavLink>
      </IconButton>

      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            A
          </Avatar>
      </IconButton>
      <Menu
        sx={{ mt: '35px' }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink to="/account/info"><MenuItem className="text-center" onClick={handleClose}>Thông Tin Tài Khoản</MenuItem></NavLink>
        <NavLink to="/"><MenuItem className="text-center" onClick={handleClose}>Đăng Xuất</MenuItem></NavLink>
      </Menu>
    </Stack>
  );
}
