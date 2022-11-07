import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const promise = axios.get("http://localhost:1234/menu");
    promise.then(response => {
      setRecipes(response.data);
    })
  }, []);

  function buildRecipes() {
    if (!recipes) return <h1>Carregando...</h1>
    return recipes.map(recipe => {
      const url = `/products/${recipe.id}`;
      return (
        <li><Link to={url}>{recipe.item}</Link></li>
      )
    })
  }

  const recipesComponent = buildRecipes();
  return (
    <div className="HomePage">
      <h1>Receitinhas delícia 🍔🍟</h1>
      <ul>
        {recipesComponent}
      </ul>
    </div>
  )
}