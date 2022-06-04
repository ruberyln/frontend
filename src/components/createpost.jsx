import { useState, useEffect } from 'react';
import { Button,  TextField, Typography} from '@mui/material';
import {Box, useTheme, Container, ThemeProvider} from '@mui/material';
//import { alignProperty } from '@mui/material/styles/cssUtils';
//import SendIcon from '@mui/icons-material/SendIcon';

const FileInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  const theme = useTheme();
  return (
    <>
	 <ThemeProvider theme={theme}>
     <Container
     component = "main"
     sx={{ 
       border : 3,
       mt: 10, 
       mb: 2,
     }} 
     >
       <Typography 
       textAlign= "center">
         Select Image to Upload
       </Typography>
	<Container component = "main"
    sx={{ 
      border : 0.5,
      mt: 10, 
			mb: 2,
		}}
  >
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={e => setSelectedImage(e.target.files[0])}
      />
	    {imageUrl && selectedImage && (
        <Box mt={2} textAlign="center">
         
          <img src={imageUrl} alt={selectedImage.name} height="700px" />
        </Box>
		
      )}
      </Container>
        <Box textAlign = 'center'
		  sx={{ mt: 10, 
			mb: 5,
		}}> 
    <TextField
     margin="normal"
     fullWidth
     name="caption"
     label="Caption">
   
    </TextField>

      </Box>
      <label htmlFor="select-image">
		  <Box textAlign = 'left'
		  sx={{ mt: 10, 
			mb: 2,
		}}>
      
        <Button variant="contained" color="primary" component="main"
		sx={{ mt: 1, 
		mb: 2,
		border:5
	
		}}>

          Select Image
        </Button>

         

		</Box>
      </label>

    
	  

     </Container>
</ThemeProvider>
    </>
  );
};

export default FileInput;