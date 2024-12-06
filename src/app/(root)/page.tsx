'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // import the `useRouter` hook from next/navigation
import Navbar from '@/src/components/Layout/Navbar';
import HomeScreen from '@/src/screens/HomeScreen';
import { recipes } from '@/src/data/recipe';
import { Recipe } from '@/src/types';

const page = () => {
  return (
    <div>
      <Navbar />
      {recipes.map((recipe: Recipe) => (
        <HomeScreen key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default page;
