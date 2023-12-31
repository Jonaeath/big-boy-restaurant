import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { theme } from './Thems/Thems';

function App() {
  return (
    <div>
      <ThemeProvider theme ={theme}>
      <CssBaseline/>
      <RouterProvider router ={router}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
