'use client';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navbar from '@/src/components/Layout/Navbar';
import Link from 'next/link';
import BreadCrumbs from '@/src/components/Layout/BreadCrumbs';

const meatCategories = [
  {
    title: 'Chicken',
    href: '/recipes/categories/pasta/chicken',
    image:
      'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Beef',
    href: '/recipes/categories/pasta/beef',
    image:
      'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Pork',
    href: '/recipes/categories/pasta/pork',
    image:
      'https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const CategoryCard = ({
  title,
  href,
  image,
}: {
  title: string;
  href: string;
  image: string;
}) => (
  <Link href={href}>
    <Card
      sx={{
        maxWidth: 345,
        m: 1,
        cursor: 'pointer',
        boxShadow: 3,
        transition: '0.3s',
        '&:hover': { transform: 'scale(1.05)' },
      }}
    >
      <CardMedia component="img" height="194" image={image} alt={title} />
      <CardContent>
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'text.secondary',
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);

export default function RecipeReviewCard() {
  return (
    <div>
      <Navbar />
      <div className="mx-[40px]">
        <BreadCrumbs />
      </div>
      <div className="mt-[20px] mx-[40px]">
        <Typography
          variant="h5"
          sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}
        >
          Meat Categories
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {meatCategories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}
