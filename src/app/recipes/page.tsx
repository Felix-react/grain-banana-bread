'use client';
import * as React from 'react';
import Link from 'next/link';
import Navbar from '@/src/components/Layout/Navbar';
import BreadCrumbs from '@/src/components/Layout/BreadCrumbs';
import { Button, Typography } from '@mui/material';

export default function RecipeReviewCard() {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen">
        {/* Fullscreen background image */}
        <img
          src="https://wallpapercave.com/wp/wp9319042.jpg"
          alt="Background"
          className="w-full h-full object-cover top-0 left-0"
          loading="lazy"
        />

        {/* Overlay content */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-center text-white">
          {/* Title and Description */}
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
            Explore Delicious Recipes
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            Discover a variety of recipes that suit every taste. From sweet to
            savory, we have it all.
          </Typography>

          {/* Buttons centered on the image */}
          <div className="mt-4">
            <Link href="/recipes/categories">
              <Button
                variant="contained"
                sx={{ margin: '10px', padding: '15px 30px' }}
              >
                Categories
              </Button>
            </Link>
            <Link href="/recipes/collections">
              <Button
                variant="contained"
                sx={{ margin: '10px', padding: '15px 30px' }}
              >
                Collections
              </Button>
            </Link>
            <Link href="/recipes/resources">
              <Button
                variant="contained"
                sx={{ margin: '10px', padding: '15px 30px' }}
              >
                Resources
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* BreadCrumbs Section */}
      <div className="mx-[40px] mt-[20px]">
        <BreadCrumbs />
      </div>
    </div>
  );
}
