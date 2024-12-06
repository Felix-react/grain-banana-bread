'use client';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Navbar from '@/src/components/Layout/Navbar';
import ShopNavbar from '@/src/components/Layout/Navbar/ShopNavbar';

const Shop: React.FC = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2tmYXN0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Breakfast',
      description:
        'Start your day with a healthy and delicious breakfast. Try our assorted morning dishes.',
    },
    {
      img: 'https://images.unsplash.com/photo-1536329639134-ade172b2fea0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHVuY2glMjBmb29kfGVufDB8fDB8fHww',
      title: 'Lunch',
      description:
        'Fuel your afternoon with a hearty lunch. Choose from our wide range of options.',
    },
    {
      img: 'https://images.unsplash.com/photo-1524334788144-6dc88da21500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpbm5lciUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
      title: 'Dinner',
      description:
        'End your day with a savory dinner. From comfort food to gourmet meals, we have it all.',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1681826495246-aac523b9461f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGVzc2VydCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
      title: 'Dessert',
      description:
        'Treat yourself to a sweet dessert after your meal. Indulge in our freshly made treats.',
    },
  ];

  return (
    <div>
      <ShopNavbar />
      <ImageList cols={2} gap={16}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
            <div
              style={{
                textAlign: 'center',
                marginTop: '12px',
                fontWeight: 'bold',
                fontSize: '1.2em',
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                textAlign: 'center',
                marginTop: '8px',
                fontSize: '1em',
                color: 'gray',
              }}
            >
              {item.description}
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Shop;
