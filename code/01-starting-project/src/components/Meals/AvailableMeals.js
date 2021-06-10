import React, { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const mealDataURL = 'https://react-http-a34b0-default-rtdb.firebaseio.com/meals.json';
 
  const [mealsList, setMealsList] = useState([]);
  
  const {
    isLoading,
    error,
    sendRequest: fetchMealList,
  } = useHttp();

  useEffect(() => {
  
    const transformMeals = ((meals) => {
      if(meals === null) {
        console.log('database is empty');
        return;
      }

      const loadedMealslist = [];
  
      for (const mealKey in meals) {
        loadedMealslist.push({ 
          id: "m"+mealKey, 
          name: meals[mealKey].name,
          description: meals[mealKey].description, 
          price: meals[mealKey].price });
      }
      
      //console.log(loadedMealslist);
      setMealsList(loadedMealslist);
    });
    
    fetchMealList(
      { url: mealDataURL },
      transformMeals
    );
  }, [fetchMealList]);


  //TODO: Fetch from the http request in the db. 
  const mealsItemList = mealsList.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content;
  if (error !== null) {
    content = <p>{error.message}</p>;
  } else {
    console.log(error);    
  }

  if (isLoading) {
    content = <section><p>Loading...</p></section>;
  }else {
    content = <Card><ul>{mealsItemList}</ul></Card>;
  }

  
  return (
    <section className={classes.meals}>
        {content}
    </section>
  );
};

export default AvailableMeals;
