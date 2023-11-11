import React from 'react';
import { Box, Container} from '@mui/material';
import TabButtons from '../Custom/TabButtons';


const FoodCategory = () => {
    const [value, setValue] = React.useState(0);

   return (
      <Box>
         <Container>
            <Box
               sx={{
                  maxWidth: 500,
                  mx: 'auto',
               }}
            >
               <TabButtons  value={value} setValue={setValue}/>
            </Box>
        
         </Container>
      </Box>
   );
};

export default FoodCategory;