import React, { useContext } from 'react';
import Reciepe from './Reciepe';
import { RecipeContext } from './App';

export default function ReciepeList({ recipes }) {
  const { handleRecipesAdd } = useContext(RecipeContext);
  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => {
          return <Reciepe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipesAdd}>
          Add Recipes
        </button>
      </div>
    </div>
  );
}
