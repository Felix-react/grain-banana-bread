import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Link from 'next/link';

const ShopDropDownBar = () => {
  const linkStyles = {
    fontSize: '0.76rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#444141',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: 'none',
        paddingX: 4,
        height: '80px',
      }}
    >
      <Toolbar
        className="bg-[#F8F5F0]"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {/* Center Links */}
        <Box sx={{ display: 'flex', gap: 5 }}>
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert'].map((item) => (
            // <Link href={`/shop/${item.toLowerCase()}`} passHref key={item}>
            <Link href="recipes" passHref key={item}>
              <Typography sx={linkStyles}>{item}</Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ShopDropDownBar;
