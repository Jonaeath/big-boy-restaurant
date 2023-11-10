import React from 'react';
import { Container, IconButton, Button, Stack } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { FlexBox } from '../../Styled/FlexBox';

const NavBar = () => {


    return (
        <div>
        <Container>
            <FlexBox
               justifyContent='space-between'
               sx={{
                  padding: '1rem 0',
               }}
            >
               <img
                  alt='Logo'
                  src='https://i.ibb.co/cFdGJLH/Big-Boy-Logo-2022-svg.png'
                  style={{
                     width: '150px',
                     height:'',
                     
                  }}
               />

               <Stack
                  direction='row'
                  spacing={4}
                  sx={{
                     alignItems: 'center',
                  }}
               >
                  <IconButton>
                     <ShoppingCartOutlinedIcon />
                  </IconButton>

                  <Button variant='text' sx={{color: '#191919'}}>Sign In</Button>
                  <Button>Sign Up</Button>
               </Stack>
            </FlexBox>
         </Container>
      </div>
    );
};

export default NavBar;