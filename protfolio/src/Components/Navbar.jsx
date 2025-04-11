

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Slide in direction="down">
      <AppBar position="fixed" sx={{ backgroundColor: 'red', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', height: '90px', width: '100%' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Sans serif',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '32px',
              flexGrow: 1,
              letterSpacing: '2px',
              textShadow: '2px 2px 5px rgba(0,0,0,0.3)',
              transition: '0.3s',
              '&:hover': { color: '#000' }
            }}
          >
           DIVYA 
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', ml: 2 }}>
            {menuItems.map((item, index) => (
              <Link to={item.path} key={index} style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    color: '#fff',
                    '&:hover': { backgroundColor: '#fff', color: 'red', borderRadius: '5px' },
                    fontWeight: 'bold',
                    marginRight: '15px',
                    transition: '0.3s'
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ display: { xs: 'block', sm: 'none' }, color: '#fff' }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            sx={{ '& .MuiPaper-root': { backgroundColor: '#ff4d00', color: '#fff' } }}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} onClick={handleClose} sx={{ '&:hover': { backgroundColor: '#fff', color: '#ff4d00' } }}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
                  {item.label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
