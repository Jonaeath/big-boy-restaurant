import { useEffect, useState } from 'react';
import { axiosInstance } from '../Utilities/axiosInstance';

const useMeals = () => {
   const [meals, setMeals] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState('');

   useEffect(() => {
      let url = 'meals';

      const fetchMeals = async () => {
         setLoading(true);
         try {
            const { status, data } = await axiosInstance.get(url);
            if (status === 200) {
               setMeals(data);
               setLoading(false);
               setError('');
            }
         } catch (error) {
            setLoading(false);
            setError(error.response.data.message);
         }
      };

      fetchMeals();
   }, []);

   return {
      meals,
      loading,
      error,
   };
};

export default useMeals;