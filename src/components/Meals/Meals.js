import { Fragment } from 'react';
import React, {useState} from 'react'; 

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import MealsFilter from './MealsFilter';

const Meals = (props) => {

  return (
    <Fragment>
      <MealsSummary />
      <MealsFilter/>
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;