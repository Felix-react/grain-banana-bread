import { Category } from '../types/types';

export const foodCategories: Category[] = [
  {
    id: 1,
    name: "Bread",
    imageUrl: "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg",
    subcategories: [
      {
        id: 1,
        name: "Quick Bread",
        imageUrl: "https://images.pexels.com/photos/1167318/pexels-photo-1167318.jpeg",
        recipes: [
          {
            id: 101,
            title: "Whole-Grain Banana Bread",
            description: "A one-bowl banana bread recipe that's easy and moist.",
            prepTime: "10 mins",
            bakeTime: "1 hr 15 mins",
            totalTime: "1 hr 25 mins",
            servings: "12 servings",
            imageUrl: "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg"
          },
          {
            id: 102,
            title: "Classic Cornbread",
            description: "Savory, buttery cornbread perfect for soups.",
            prepTime: "5 mins",
            bakeTime: "20 mins",
            totalTime: "25 mins",
            servings: "8 servings",
            imageUrl: "https://images.pexels.com/photos/1191971/pexels-photo-1191971.jpeg"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Soups",
    imageUrl: "https://images.pexels.com/photos/1167318/pexels-photo-1167318.jpeg",
    subcategories: [
      {
        id: 1,
        name: "Creamy Soups",
        imageUrl: "https://images.pexels.com/photos/1167318/pexels-photo-1167318.jpeg",
        recipes: [
          {
            id: 201,
            title: "Tomato Basil Soup",
            description: "A creamy tomato soup with fresh basil and garlic.",
            prepTime: "5 mins",
            bakeTime: "25 mins",
            totalTime: "30 mins",
            servings: "4 servings",
            imageUrl: "https://images.pexels.com/photos/1167318/pexels-photo-1167318.jpeg"
          }
        ]
      }
    ]
  }
];
