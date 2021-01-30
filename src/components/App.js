import React, { useState, useEffect } from 'react';
import ReciepeList from './ReciepeList';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState(); // no default value
  const [recipes, setRecipes] = useState(samples);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);
  // console.log(selectedRecipe);

  useEffect(() => {
    const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipesJSON != null) {
      setRecipes(JSON.parse(recipesJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const recipeContextValue = {
    handleRecipesAdd, // both work the  same, if name are same
    handleRecipesDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  // whenever we click the edit button we want to store selectedRecipe i.e using function
  function handleRecipeSelect(id) {
    // garbage function for naming
    setSelectedRecipeId(id);
  }

  function handleRecipesAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: '',
      cookTime: '',
      instructions: '',
      ingredients: [{ id: uuidv4(), name: '', amount: '' }],
    };
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id);
    newRecipes[index] = recipe; // swapping out one of the recipes in our array
    setRecipes(newRecipes);
  }

  function handleRecipesDelete(id) {
    if (selectedRecipeId !== null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <ReciepeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const samples = [
  {
    id: 1,
    name: 'plain chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put Salt on Chicken\n 2. Put Chicken in oven\n 3. Eat Chicken',
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs',
      },
    ],
  },
  {
    id: 2,
    name: 'plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions:
      '1. Put paprika on Chicken\n 2. Put pork in oven\n 3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: 'pork',
        amount: '2 Pounds',
      },
      {
        id: 2,
        name: 'paprika',
        amount: '1 Tbs',
      },
    ],
  },
];

export default App;
