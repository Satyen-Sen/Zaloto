import { Fragment } from 'react';
import React from 'react'; 

import MealsSummary from './MealsSummary';
import MealsFilter from './MealsFilter';
import AvailableMeals from './AvailableMeals'; 


const Meals = (props) => {

  
  // const filteredMeal = props.items.filter((meals) => {
  //   return meals.category === filteredCategory
  // });

  return (
    <Fragment>
      
      <MealsSummary />
      <MealsFilter/>
      <AvailableMeals/>
    </Fragment> 
      
  );
};

export default Meals;