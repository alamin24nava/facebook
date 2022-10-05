import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ActiveUsers from '../api/ActiveUsers'
export default function RightSideBar() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, position:'fixed', right:0, top:'80px' }}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:'16px'}}>
            <Typography sx={{fontSize:'16px', fontWeight:'700', color:'#ffffff'}}>Contacts</Typography>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'16px'}}>
                <AddToQueueIcon sx={{cursor:'pointer', color:'#fff'}} />
                <SearchIcon sx={{cursor:'pointer', color:'#fff'}}/>
                <MoreHorizIcon sx={{cursor:'pointer', color:'#fff'}} />
            </Box>
        </Box>
        <ActiveUsers />
    </Box>
  );
}
