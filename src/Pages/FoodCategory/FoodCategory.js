import React from 'react';
import { Box, Container} from '@mui/material';
import TabButtons from '../Custom/TabButtons';


const FoodCategory = () => {



   return (
      <Box>
         <Container>
            <Box
               sx={{
                  maxWidth: 500,
                  mx: 'auto',
               }}
            >
               <TabButtons/>
            </Box>
        
         </Container>
      </Box>
   );
};

export default FoodCategory;