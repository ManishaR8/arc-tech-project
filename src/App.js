import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
const API = "https://jsonplaceholder.typicode.com/users";

const App = () => {

  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
       
        if(data.length > 0){
          setUsers(data);
        }
        console.log(data);
    } catch(e){
      console.error(e);
    }

  }
  useEffect(() => {
    fetchUsers(API);
  }, []);
  

  return (
    <Box p={2}>
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={10} lg={8}>
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell 
              sx={{ 
                backgroundColor: 'black',
                color: 'white' 
              }}>
                ID
            </TableCell>
            <TableCell 
              sx={{ backgroundColor: 'black',
               color: 'white' 
               }}>
                NAME
            </TableCell>
            <TableCell
              sx={{ backgroundColor: 'black',
               color: 'white' 
               }}>
                EMAIL
            </TableCell>
            <TableCell 
              sx={{ backgroundColor: 'black',
              color: 'white' 
             }}>
              ADDRESS
            </TableCell>
            <TableCell 
              sx={{ backgroundColor: 'black',
              color: 'white' 
              }}>
              PHONE
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map((curUser) => (
              <TableRow key={curUser.id}>
            <TableCell>{curUser.id}</TableCell>
            <TableCell>{curUser.name}</TableCell>
            <TableCell>{curUser.email}</TableCell>
            <TableCell>{curUser.address.city}</TableCell>
            <TableCell>{curUser.phone}</TableCell>
          </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
   </Box>
  )
}

export default App;
