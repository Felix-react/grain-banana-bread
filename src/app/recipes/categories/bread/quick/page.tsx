import Navbar from '@/src/components/Layout/Navbar';
import HomeScreen from '@/src/screens/HomeScreen';
import React from 'react';
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
//
