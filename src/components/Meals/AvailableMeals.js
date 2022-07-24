import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Vegan Sushi',
    description: 'Finest plant-fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Beyond burger',
    description:
      'It looks and tastes like meat but is 100% plant-based veggie patty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Stir-fry tofu',
    description: 'Tofu with rice and vegetables.',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Buddha Bowl',
    description:
      'Vitamin bomb with mix of chickpeas, avokado, vegeatbles and salad.',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} item={meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
