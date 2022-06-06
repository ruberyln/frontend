import * as React from 'react';
import Avatar from '@mui/material/Avatar';
//import Stack from '@mui/material/Stack';
import {Grid, Typography,Button} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

export default function ImageAvatar() {
  return (


  <Grid container
  direction="column"
  justifyContent="space-between"
  alignItems="flex-end" >
      <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56, 
            marginTop :8 }} />
          <Typography>Titi Smart </Typography>
          <Button variant = "outlined" color = "secondary"> <SettingsIcon/> Edit Profile</Button>
</Grid>

    
  );
}
