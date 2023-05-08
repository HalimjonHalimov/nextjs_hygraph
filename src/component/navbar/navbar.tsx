import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { NavItems } from "@/src/config/constants";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AdjustIcon from '@mui/icons-material/Adjust';


interface Props {
  window?: () => window;
}

const Navbar = ({ window }: Props ) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box paddingX={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="h6" sx={{ my: 2 }}>
          <Box  display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
            <AdjustIcon />
            <Typography  variant="h6">Blackmagic</Typography>
          </Box>
        </Typography>
        <CloseIcon />
      </Box>
      <Divider />
      <List>
        {NavItems.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <Box height={'10vh'} sx={{ display: 'flex' }}>
      <AppBar  sx={{backgroundColor: 'primary.main'}} component="nav">
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Box  display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
              <AdjustIcon />
              <Typography  variant="h6">Blackmagic</Typography>
            </Box>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {NavItems.map((item) => (
              <Button key={item.route} sx={{ color: '#fff' }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default Navbar