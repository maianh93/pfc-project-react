import * as React from 'react';
import { Link, NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

export default function FallbackAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <NavLink className="nav-link" to="/account/login"><Avatar src="/broken-image.jpg" /></NavLink>
      <NavLink className="nav-link" to="/account/register"><Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        A
      </Avatar></NavLink>
      {/* <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      /> */}
    </Stack>
  );
}
