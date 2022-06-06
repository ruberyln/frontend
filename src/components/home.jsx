import * as React from 'react';
import { styled, } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container'
import Comments from "./comments/Comments";
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
//import Button from '@mui/material/Button'
//import TextField from '@mui/material/TextField'

import { CardHeader, CardActions, CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import Drawer from './drawer';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Home() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
return (

  <><Drawer /><Box component="main" sx={{ flexGrow: 1, p: 3 }}>

    <Container component="main">
      <Card sx={{ marginTop: 8, maxWidth: 900 }}
        alignItems="center"
        justifyContent="center">
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>}
          title="@user"
          subheader="September 14, 2016" />
        <CardMedia
          component="img"
          height="500"
          image="https://images.unsplash.com/photo-1603189343302-e603f7add05a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
         Working it out. 
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ThumbDownOutlinedIcon />
          </IconButton>
          <Typography variant="h6">View Comments
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          > 
            <ExpandMoreIcon />
          </ExpandMore>
          </Typography>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

<Comments/>

          </CardContent>
        </Collapse>



       
      </Card>


      <Card sx={{ maxWidth: 900 }}
        alignItems="center"
        justifyContent="center">
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            E
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>}
          title="@user"
          subheader="September 14, 2016" />
        <CardMedia
          component="img"
          height="500"
          image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
          alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           caption
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ThumbDownOutlinedIcon />
          
          </IconButton>
          <Typography variant="h7" > View Comments
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          > 
        
            <ExpandMoreIcon />
          </ExpandMore>
          </Typography>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

          <Comments/>
          </CardContent>
        </Collapse>

      </Card>

      <Card sx={{ maxWidth: 900 }}
        alignItems="center"
        justifyContent="center">
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            D
          </Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>}
          title="@user"
          subheader="September 14, 2016" />
        <CardMedia
          component="img"
          height="500"
          image="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            You know how it is. Fashion = my life.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ThumbDownOutlinedIcon />
          </IconButton>
          <Typography variant="h6"> View Comments
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          > 
         
            <ExpandMoreIcon />
          </ExpandMore>
          </Typography>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
<Comments/>


          </CardContent>
        </Collapse>



       

      </Card>
    </Container>

  </Box></>
  
  );
}
