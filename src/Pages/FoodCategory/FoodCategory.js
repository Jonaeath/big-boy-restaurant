import React from 'react';
import { Box, Container} from '@mui/material';
import TabButtons from '../Custom/TabButtons';
import useMeals from '../../hooks/useMeals.js';
import Cards from '../Cards/Cards.js';


const FoodCategory = () => {
    const [value, setValue] = React.useState(0);
    const {meals} = useMeals();

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
            <Box
               sx={{
                  display: 'grid',
                  // auto-fit the card
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  justifyItems: 'center',
                  gap: '20px',
                  mt: 8,
               }}
            >
               {
                  meals.map(meal=><Cards
                  key ={meal._id}
                  meal = {meal}
                  ></Cards>)
               }

            </Box>

        
         </Container>
      </Box>
   );
};

export default FoodCategory;