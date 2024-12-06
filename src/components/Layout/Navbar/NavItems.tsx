'use client'; // Add this directive

import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct hook for App Router
import zIndex from '@mui/material/styles/zIndex';

const Navbar = () => {
  const pathname = usePathname(); // Get the current route

  const navItems = [
    { label: 'Shop', path: '/shop' },
    { label: 'Recipes', path: '/recipes' },
    { label: 'Learn', path: '/learn' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
  ];

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: 'none',
        paddingX: 4,
        height: '80px',
        marginLeft: '64px',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left: Monkey Icon */}
        <Box
          component="img"
          src="data:image/jpeg;base64,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" // Replace with the correct image path
          alt="Monkey Icon"
          sx={{
            height: 100,
            width: 'auto',
            marginRight: '30px',
            zIndex: 50,
            marginTop: '70px',
            background: 'transprent',
          }}
        />

        {/* Center Links */}
        <Box
          sx={{
            display: 'flex',
            gap: 8,
            flexGrow: 1,
          }}
        >
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} passHref>
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: '#000',
                  cursor: 'pointer',
                  textDecoration: pathname === item.path ? 'underline' : 'none',
                  textDecorationColor:
                    pathname === item.path ? '#a73439' : 'transparent',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px',
                  '&:hover': {
                    textDecoration: 'underline',
                    textDecorationColor: '#a73439',
                    textDecorationThickness: '2px',
                    textUnderlineOffset: '4px',
                  },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
