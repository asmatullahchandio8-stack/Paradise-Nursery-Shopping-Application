export const categories = [
  {
    id: "indoor",
    name: "Indoor Plants",
    description: "Fresh green plants that brighten indoor spaces.",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 3,
        name: "Spider Plant",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80"
      }
    ]
  },
  {
    id: "succulents",
    name: "Succulents",
    description: "Low-maintenance plants for sunny corners.",
    plants: [
      {
        id: 4,
        name: "Aloe Vera",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c1a1b7?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 5,
        name: "Jade Plant",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 6,
        name: "Echeveria",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80"
      }
    ]
  },
  {
    id: "tropical",
    name: "Tropical Plants",
    description: "Lush tropical favorites for a paradise feeling.",
    plants: [
      {
        id: 7,
        name: "Monstera",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 8,
        name: "Areca Palm",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 9,
        name: "Rubber Plant",
        price: 27.99,
        image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80"
      }
    ]
  }
];

export const plants = categories.flatMap((category) =>
  category.plants.map((plant) => ({
    ...plant,
    category: category.name
  }))
);