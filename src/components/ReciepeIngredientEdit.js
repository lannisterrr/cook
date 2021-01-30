import React from 'react';

export default function ReciepeIngredientEdit(props) {
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  // ---------- we are chaining back our component back to app.js. from child to parent
  return (
    <>
      <input
        value={ingredient.name}
        className="recipe-edit__input"
        onChange={e => handleChange({ name: e.target.value })}
      />
      <input
        value={ingredient.amount}
        className="recipe-edit__input"
        onChange={e => handleChange({ amount: e.target.value })}
      />
      <button
        className="btn btn--danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        &times;
      </button>
    </>
  );
}
