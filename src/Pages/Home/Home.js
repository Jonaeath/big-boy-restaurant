import { Stack } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import FoodCategory from '../FoodCategory/FoodCategory';

const Home = () => {
    return (
        <Stack spacing={10}>
            <Banner/>
            <FoodCategory/>
      </Stack>
    );
};

export default Home;