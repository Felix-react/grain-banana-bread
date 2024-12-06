'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // import the `useRouter` hook from next/navigation
import Navbar from '@/src/components/Layout/Navbar';
import HomeScreen from '@/src/screens/HomeScreen';
import { recipes } from '@/src/data/recipe';
import { Recipe } from '@/src/types';

const page = () => {
  // const router = useRouter();

  // // Redirect to the shop page as soon as the component is mounted
  // useEffect(() => {
  //   router.push('/shop'); // Redirects to /shop
  // }, [router]);

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
