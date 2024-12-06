'use client';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navbar from '@/src/components/Layout/Navbar';
import Link from 'next/link';
import BreadCrumbs from '@/src/components/Layout/BreadCrumbs';

const categories = [
  {
    title: 'Bread',
    href: '/recipes/categories/bread',
    image:
      'https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Soup',
    href: '/recipes/categories/soup',
    image:
      'https://images.pexels.com/photos/1618888/pexels-photo-1618888.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Pasta',
    href: '/recipes/categories/pasta',
    image:
      'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
  },
  {
    title: 'Meat',
    href: '/recipes/categories/meat',
    image:
      'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Fruits',
    href: '/recipes/categories/fruits',
    image: 'https://images.pexels.com/photos/1071877/pexels-photo-1071877.jpeg',
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
          variant="h6"
          component="div"
          sx={{
            textAlign: 'center',
            color: 'text.primary',
            fontWeight: 'bold',
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
          variant="h4"
          component="h1"
          sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}
        >
          Recipe Categories
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
}
