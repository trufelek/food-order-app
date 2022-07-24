import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food delivered to you!</h2>
      <p>Choose your favorite meal from our broad selections and enjoy delicious lunch or dinner at home.</p>
      <p>All our meals are plant-pased - for your health, planet and animals.</p>
    </section>
  );
};

export default MealsSummary;