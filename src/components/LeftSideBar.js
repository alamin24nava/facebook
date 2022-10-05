import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GroupsIcon from '@mui/icons-material/Groups';


export default function LeftSideBar() {
  return (
    <Box sx={{ width: '100%', maxWidth: 300, position:'fixed', left:0, top:'80px' }}>
        <nav aria-label="main mailbox folders">
        <List sx={{color:'#fff'}}>
            <ListItem sx={{color:'#fff'}} component={'a'} href='/' disablePadding>
                <ListItemButton>
                <ListItemIcon sx={{minWidth:'42px'}}>
                    <HomeIcon sx={{color:'#2e89ff', fontSize:'28px'}}/>
                </ListItemIcon>
                <ListItemText primary="Home" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{color:'#fff'}} component={'a'} href='/menu' disablePadding>
                <ListItemButton>
                <ListItemIcon sx={{minWidth:'42px'}}>
                    <MenuIcon sx={{color:'#2e89ff', fontSize:'28px'}}/>
                </ListItemIcon>
                <ListItemText primary="Menu" />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{color:'#fff'}} component={'a'} href='/watch' disablePadding>
                <ListItemButton>
                <ListItemIcon sx={{minWidth:'42px'}}>
                    <OndemandVideoIcon sx={{color:'#2e89ff', fontSize:'28px'}}/>
                </ListItemIcon>
                <ListItemText primary="Watch " />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{color:'#fff'}} component={'a'} href='/marketplace' disablePadding>
                <ListItemButton>
                <ListItemIcon sx={{minWidth:'42px'}}>
                    <StoreIcon sx={{color:'#2e89ff', fontSize:'28px'}}/>
                </ListItemIcon>
                <ListItemText primary="Marketplace " />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{color:'#fff'}} component={'a'} href='/gaming' disablePadding>
                <ListItemButton>
                <ListItemIcon sx={{minWidth:'42px'}}>
                    <SportsEsportsIcon sx={{color:'#2e89ff', fontSize:'28px'}}/>
                </ListItemIcon>
                <ListItemText primary="Gaming " />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{color:'#fff'}} component={'a'} href='/groups' disablePadding>
                <ListItemButton>
                <ListItemIcon sx={{minWidth:'42px'}}>
                    <GroupsIcon sx={{color:'#2e89ff', fontSize:'28px'}}/>
                </ListItemIcon>
                <ListItemText primary="Groups " />
                </ListItemButton>
            </ListItem>
            <ListItem sx={{color:'#fff'}} component={'a'} href='/' disablePadding>
                <ListItemButton>
                <ListItemIcon sx={{minWidth:'42px'}}>
                    <SportsEsportsIcon sx={{color:'#2e89ff', fontSize:'28px'}}/>
                </ListItemIcon>
                <ListItemText primary="Gaming " />
                </ListItemButton>
            </ListItem>
        </List>
        </nav>
    </Box>
  );
}
