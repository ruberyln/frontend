
import * as React from 'react';
import { styled, } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MoreVertIcon from '@mui/icons-material/MoreVert';
//import Container from '@mui/material/Container'

import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'


<Card sx={{ maxWidth: 900 }}
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
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          > <Typography variant="h6">View Comments</Typography>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

            <Typography paragraph>Comments</Typography>
            <Typography paragraph>
              @User1 Wow, looking beautiful
              <br></br>
              @User2 inspired !
            </Typography>


          </CardContent>
        </Collapse>



        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
          }}>
          <TextField id="outlined-basic" label="comment" variant="outlined">
            Comment
          </TextField>
        </Box>

        <Box
          m={1}
          //margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button>
            Post
          </Button>


        </Box>

      </Card>