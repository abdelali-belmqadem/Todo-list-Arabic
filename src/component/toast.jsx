import * as React from 'react';
import Snackbar from '@mui/joy/Snackbar';
import Alert from '@mui/material/Alert';
import "./stylecomponent.css";


export default function Toast({message , open }) {
 

  return (
 <div dir="rtl">

      <Snackbar open={open} 
      
        sx={{
       background: 'none',
      color: 'black', 
      boxShadow: 'none',
      border:"none"     

        }}>

        <Alert variant="filled" severity="success"  >
  {message}
</Alert>
      </Snackbar>
    </div>
  );
}