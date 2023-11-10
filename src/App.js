import { CssBaseline } from '@mui/material';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div>
      <CssBaseline/>
      <RouterProvider router ={router}/>
      <h1>Red sona</h1>
    </div>
  );
}

export default App;
