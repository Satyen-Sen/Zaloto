import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DummyMeals = [
  {
    id: '01',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    category: 'Non-Veg', 
  },
  {
    id: '02',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    category: 'Non-Veg',
  },
  {
    id: '03',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    category: 'Non-Veg',
  }, 
  {
    id: '04',
    name: 'Grilled Chicken Escalope',
    description: 'Grilled to perfection',
    price: 29.99,
    category: 'Non-Veg',
  },
  {
    id: '05',
    name: 'Lamb Chops',
    description: 'Marinated in strained yogurt...',
    price: 35.49,
    category: 'Non-Veg',
  },
  {
    id: '06',
    name: 'Parmesan Fish Fingers',
    description: 'Wrapped in batter and fried to perfection.',
    price: 17.99,
    category: 'Non-Veg',
  },
  {
    id: '07',
    name: 'Prawn Curry',
    description: 'Burst of flavours... a brilliant Goan delicacy.',
    price: 19.99,
    category: 'Non-Veg',
  },
  {
    id: '08',
    name: 'Hyderabadi Keema',
    description: 'A mouth-watering masaledaar dish...',
    price: 15.99,
    category: 'Non-Veg',
  },
  {
    id: '09',
    name: 'Butter Chicken',
    description: 'North-Indian style chicken recipe...',
    price: 20.00,
    category: 'Non-Veg',
  },
  {
    id: '10',
    name: 'Mutton Korma',
    description: 'A super delicious dinner party dish...',
    price: 22.49,
    category: 'Non-Veg',
  },
  {
    id: '11',
    name: 'Pumpkin seed pesto',
    description: 'A Croatian specialty...',
    price: 24.99,
    category: 'Veg',
  },
  {
    id: '12',
    name: 'Burek',
    description: 'Delicious Dish... Originated in Turkey',
    price: 27.99,
    category: 'Veg',
  },
  {
    id: '13',
    name: 'Caponata',
    description: 'Flavorful...Delicious...a typical Sicilian vegetable dish',
    price: 12.99,
    category: 'Veg',
  },
  {
    id: '14',
    name: 'Cauliflower Cheese',
    description: 'A traditional English dish',
    price: 10.49,
    category: 'Veg',
  },
  {
    id: '15',
    name: 'Stamppot',
    description: 'Ancestral Dutch flavour',
    price: 13.99,
    category: 'Veg',
  },
  {
    id: '16',
    name: 'Gemista',
    description: 'A typical summer dish... Originated from Greece',
    price: 15.99,
    category: 'Veg',
  },
  {
    id: '17',
    name: 'Parmigiana Di Melanzane',
    description: 'A vegetable casserole... traditionally from southern Italy',
    price: 17.99,
    category: 'Veg',
  },
  {
    id: '18',
    name: 'Ratatouille',
    description: 'A colorful Provençal vegetable ragout',
    price: 14.49,
    category: 'Veg',
  },
  {
    id: '19',
    name: 'Cheesy Spaetzle',
    description: 'Made with vegan cheese and onions...originated from Germany',
    price: 19.99,
    category: 'Veg',
  },
  {
    id: '20',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    category: 'Veg',
  },
  
];

let vegMeals = DummyMeals.filter(function (meals) {
  return meals.category === 'Veg'; 
} );

const AvailableMeals = () => {
  const mealsList = vegMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      category={meal.category}
    />
  ));

 
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
