export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  category: 'signature' | 'build-your-own' | 'seasonal' | 'sides' | 'drinks';
  image: string;
  ingredients: string[];
  dietary: ('vegan' | 'vegetarian' | 'gluten-free' | 'dairy-free' | 'keto')[];
  featured?: boolean;
}

export interface Ingredient {
  id: string;
  name: string;
  category: 'base' | 'protein' | 'topping' | 'dressing';
  price: number;
  calories: number;
  dietary: ('vegan' | 'vegetarian' | 'gluten-free' | 'dairy-free' | 'keto')[];
}

export const signatureSalads: MenuItem[] = [
  {
    id: 'caesar-supreme',
    name: 'Caesar Supreme',
    description: 'Crisp romaine, parmesan crisps, house-made croutons, and our signature Caesar dressing',
    price: 12.99,
    calories: 420,
    category: 'signature',
    image: '/images/menu/caesar-supreme.jpg',
    ingredients: ['Romaine', 'Parmesan', 'Croutons', 'Caesar Dressing'],
    dietary: ['vegetarian'],
    featured: true,
  },
  {
    id: 'garden-harvest',
    name: 'Garden Harvest',
    description: 'Mixed greens, cherry tomatoes, cucumbers, carrots, and balsamic vinaigrette',
    price: 11.99,
    calories: 280,
    category: 'signature',
    image: '/images/menu/garden-harvest.jpg',
    ingredients: ['Mixed Greens', 'Cherry Tomatoes', 'Cucumbers', 'Carrots', 'Balsamic Vinaigrette'],
    dietary: ['vegan', 'gluten-free', 'dairy-free'],
  },
  {
    id: 'protein-power',
    name: 'Protein Power Bowl',
    description: 'Quinoa base, grilled chicken, hard-boiled egg, chickpeas, and tahini dressing',
    price: 14.99,
    calories: 580,
    category: 'signature',
    image: '/images/menu/protein-power.jpg',
    ingredients: ['Quinoa', 'Grilled Chicken', 'Hard-Boiled Egg', 'Chickpeas', 'Tahini'],
    dietary: ['gluten-free'],
    featured: true,
  },
  {
    id: 'mediterranean-bliss',
    name: 'Mediterranean Bliss',
    description: 'Chopped romaine, feta, olives, red onion, cucumber, and lemon herb dressing',
    price: 13.49,
    calories: 380,
    category: 'signature',
    image: '/images/menu/mediterranean.jpg',
    ingredients: ['Romaine', 'Feta', 'Kalamata Olives', 'Red Onion', 'Cucumber', 'Lemon Herb Dressing'],
    dietary: ['vegetarian', 'gluten-free'],
  },
  {
    id: 'asian-crunch',
    name: 'Asian Crunch',
    description: 'Napa cabbage, edamame, mandarin oranges, wonton strips, and sesame ginger dressing',
    price: 13.99,
    calories: 410,
    category: 'signature',
    image: '/images/menu/asian-crunch.jpg',
    ingredients: ['Napa Cabbage', 'Edamame', 'Mandarin Oranges', 'Wonton Strips', 'Sesame Ginger Dressing'],
    dietary: ['vegan', 'dairy-free'],
  },
];

export const bases: Ingredient[] = [
  { id: 'romaine', name: 'Romaine Lettuce', category: 'base', price: 0, calories: 15, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'spinach', name: 'Baby Spinach', category: 'base', price: 0, calories: 20, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'mixed-greens', name: 'Mixed Greens', category: 'base', price: 0, calories: 18, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'kale', name: 'Tuscan Kale', category: 'base', price: 0.50, calories: 25, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'quinoa', name: 'Quinoa', category: 'base', price: 1.50, calories: 120, dietary: ['vegan', 'gluten-free', 'dairy-free'] },
  { id: 'cauliflower-rice', name: 'Cauliflower Rice', category: 'base', price: 1.00, calories: 25, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
];

export const proteins: Ingredient[] = [
  { id: 'grilled-chicken', name: 'Grilled Chicken', category: 'protein', price: 3.50, calories: 180, dietary: ['gluten-free', 'dairy-free', 'keto'] },
  { id: 'salmon', name: 'Grilled Salmon', category: 'protein', price: 5.00, calories: 220, dietary: ['gluten-free', 'dairy-free', 'keto'] },
  { id: 'tofu', name: 'Crispy Tofu', category: 'protein', price: 2.50, calories: 140, dietary: ['vegan', 'gluten-free', 'dairy-free'] },
  { id: 'shrimp', name: 'Grilled Shrimp', category: 'protein', price: 4.50, calories: 160, dietary: ['gluten-free', 'dairy-free', 'keto'] },
  { id: 'steak', name: 'Sliced Steak', category: 'protein', price: 5.50, calories: 240, dietary: ['gluten-free', 'dairy-free', 'keto'] },
  { id: 'hard-boiled-egg', name: 'Hard-Boiled Egg', category: 'protein', price: 1.50, calories: 80, dietary: ['vegetarian', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'chickpeas', name: 'Chickpeas', category: 'protein', price: 1.00, calories: 120, dietary: ['vegan', 'gluten-free', 'dairy-free'] },
];

export const toppings: Ingredient[] = [
  { id: 'cherry-tomatoes', name: 'Cherry Tomatoes', category: 'topping', price: 0.50, calories: 15, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'cucumbers', name: 'Cucumbers', category: 'topping', price: 0.50, calories: 10, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'red-onion', name: 'Red Onion', category: 'topping', price: 0.50, calories: 10, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'avocado', name: 'Fresh Avocado', category: 'topping', price: 2.00, calories: 120, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'feta', name: 'Feta Cheese', category: 'topping', price: 1.50, calories: 75, dietary: ['vegetarian', 'gluten-free', 'keto'] },
  { id: 'parmesan', name: 'Shaved Parmesan', category: 'topping', price: 1.50, calories: 80, dietary: ['vegetarian', 'gluten-free', 'keto'] },
  { id: 'goat-cheese', name: 'Goat Cheese', category: 'topping', price: 1.75, calories: 70, dietary: ['vegetarian', 'gluten-free', 'keto'] },
  { id: 'croutons', name: 'House Croutons', category: 'topping', price: 0.75, calories: 60, dietary: ['vegetarian'] },
  { id: 'walnuts', name: 'Candied Walnuts', category: 'topping', price: 1.25, calories: 90, dietary: ['vegan', 'gluten-free', 'dairy-free'] },
  { id: 'almonds', name: 'Toasted Almonds', category: 'topping', price: 1.00, calories: 80, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'bacon', name: 'Crispy Bacon', category: 'topping', price: 2.00, calories: 120, dietary: ['gluten-free', 'dairy-free', 'keto'] },
  { id: 'dried-cranberries', name: 'Dried Cranberries', category: 'topping', price: 0.75, calories: 45, dietary: ['vegan', 'gluten-free', 'dairy-free'] },
];

export const dressings: Ingredient[] = [
  { id: 'caesar', name: 'Classic Caesar', category: 'dressing', price: 0, calories: 120, dietary: ['gluten-free', 'keto'] },
  { id: 'balsamic', name: 'Balsamic Vinaigrette', category: 'dressing', price: 0, calories: 80, dietary: ['vegan', 'gluten-free', 'dairy-free'] },
  { id: 'ranch', name: 'House Ranch', category: 'dressing', price: 0, calories: 140, dietary: ['vegetarian', 'gluten-free', 'keto'] },
  { id: 'tahini', name: 'Lemon Tahini', category: 'dressing', price: 0, calories: 100, dietary: ['vegan', 'gluten-free', 'dairy-free'] },
  { id: 'sesame-ginger', name: 'Sesame Ginger', category: 'dressing', price: 0, calories: 90, dietary: ['vegan', 'dairy-free'] },
  { id: 'greek', name: 'Greek Yogurt', category: 'dressing', price: 0, calories: 60, dietary: ['vegetarian', 'gluten-free'] },
  { id: 'olive-oil', name: 'Extra Virgin Olive Oil', category: 'dressing', price: 0, calories: 120, dietary: ['vegan', 'gluten-free', 'dairy-free', 'keto'] },
  { id: 'honey-mustard', name: 'Honey Mustard', category: 'dressing', price: 0, calories: 110, dietary: ['vegetarian', 'gluten-free'] },
];

