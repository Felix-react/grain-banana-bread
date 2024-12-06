import * as React from 'react';
import BreadCrumbs from '@/src/components/Layout/BreadCrumbs';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
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

export default function Main({ recipe }: { recipe: Recipe }) {
  return (
    <div className="flex flex-col px-[100px] md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:w-1/2  pr-[60px]">
        <BreadCrumbs />
        <h2 className="text-[48px] font-bold pr-[64px] mb-[90px]">
          {recipe.title}
        </h2>
        <p className="text-gray-600 mt-2 text-[22px] mb-8">
          {recipe.description}
        </p>
        <div className="mt-4 space-y-1 text-gray-800 mb-6">
          <span className="flex items-center space-x-2 mb-6">
            <AccessTimeIcon sx={{ fontSize: 60 }} />
            <div>
              <strong className="text-[16px]">Prep</strong> <br />
              <strong className="text-[24px]">{recipe.prepTime}</strong>
            </div>
            <div>
              <strong className="text-[16px]">Bake</strong> <br />
              <strong className="text-[24px]">{recipe.bakeTime}</strong>
            </div>
            <div>
              <strong className="text-[16px]">Total</strong> <br />
              <strong className="text-[24px]">{recipe.totalTime}</strong>
            </div>
          </span>
          <Divider />
          <span className="flex items-center space-x-2">
            <GroupWorkIcon sx={{ fontSize: 60 }} />
            <div className="w-[250px]">
              <strong className="text-[16px]">Yeild</strong> <br />
              <strong className="text-[24px]">{recipe.servings}</strong>
            </div>
            <Button variant="outlined" color="error">
              <AddIcon sx={{ color: 'black' }} />
              <p className="text-black">SAVE RECIPE</p>
            </Button>
            <Button variant="outlined" color="error">
              <PrintIcon sx={{ color: 'black' }} />
              <p className="text-black">PRINT</p>
            </Button>
          </span>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          width={680}
          height={4300}
          className="object-cover"
        />
      </div>
    </div>
  );
}
