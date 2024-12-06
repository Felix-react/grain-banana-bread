'use client';
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Image from 'next/image';

// Define the type for the recipe object
type Recipe = {
  id: number;
  title: string;
  description: string;
  prepTime: string;
  bakeTime: string;
  totalTime: string;
  servings: string;
  imageUrl: string;
};

const Main = ({ recipe }: { recipe: Recipe }) => {
  // Handle breadcrumb clicks
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };

  // Define breadcrumbs for navigation
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key="3" sx={{ color: 'text.primary' }}>
      Breadcrumb
    </Typography>,
  ];

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Left section: Recipe details */}
      <div className="md:w-1/2 p-6">
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>

        {/* Recipe title */}
        <h2 className="text-2xl font-bold">{recipe.title}</h2>

        {/* Recipe description */}
        <p className="text-gray-600 mt-2">{recipe.description}</p>

        {/* Recipe time and servings */}
        <div className="mt-4 space-y-1 text-gray-800">
          <p>
            <strong>Prep Time:</strong> {recipe.prepTime}
          </p>
          <p>
            <strong>Bake Time:</strong> {recipe.bakeTime}
          </p>
          <p>
            <strong>Total Time:</strong> {recipe.totalTime}
          </p>
          <p>
            <strong>Servings:</strong> {recipe.servings}
          </p>
        </div>
      </div>

      {/* Right section: Recipe image */}
      <div className="md:w-1/2">
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          width={600}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Main;
