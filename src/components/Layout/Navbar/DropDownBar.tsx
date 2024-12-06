import React from 'react';
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const DropDownBar = () => {
  return (
    <div>
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
          className="bg-[#F8F5F0] "
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          {/* Center Links */}
          <Box
            className="ml-[182px]"
            sx={{
              display: 'flex',
              gap: 5,
              flexGrow: 1,
              justifyContent: '',
            }}
          >
            <Link href="/recipes/categories" passHref>
              <Typography
                sx={{
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: '#444141',
                  cursor: 'pointer',
                }}
              >
                CATEGORIES
              </Typography>
            </Link>
            <Link href="/recipes/collections" passHref>
              <Typography
                sx={{
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: '#444141',
                  cursor: 'pointer',
                }}
              >
                COLLECTIONS
              </Typography>
            </Link>
            <Link href="/resources" passHref>
              <Typography
                sx={{
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: '#444141',
                  cursor: 'pointer',
                }}
              >
                RESOURCES
              </Typography>
            </Link>
          </Box>

          {/* bottom Links */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default DropDownBar;
