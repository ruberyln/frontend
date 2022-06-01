import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
//import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Stack from '@mui/material/Stack';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Card from '@mui/material/Card';
const theme = createTheme();

export default function SignOut() {
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
    <Card sx ={{maxWidth:345,  marginTop: 10,  }} 
      alignItems = "center"
      justifyContent ="center">
      <CssBaseline />
      <Box
          sx={{
              
            marginTop: 8,
            backgroundColor :"",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          
          }}
        >
       <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
            <PowerSettingsNewIcon />
          </Avatar>
  <Typography component="h6" variant="h6"
  sx = {{ m: 1,  }}>
         Sad to See You Go
          </Typography>

          <Box
          sx={{
            marginTop: 1,
            backgroundColor :"",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom:5
          }}
        >
          <Typography component="h1" variant="h5"
  sx = {{ m: 1,  }}>Are You Sure You want to Sign Out</Typography>
     <Stack direction="row" spacing={12}>
          <Button
        
              type="submit"
            variant="contained" color="secondary"
              component ={Link}
              href = {"http://localhost:3000"}
              
            >
              Yes 
            </Button>
           
           
            <Button
              type="submit"
            variant="contained" color="secondary"
              component ={Link}
              href = {"/home "}
              
            >
              Cancel 
            </Button>
            </Stack>
            </Box>
        </Box>
        </Card>
        </Container>
        </ThemeProvider>

  );
}
