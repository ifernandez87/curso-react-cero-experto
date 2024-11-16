import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku", "Vegeta"]);

  const onAddCategory = (newCategory) => {
    {
      /* Verificar si existe el elemento en la lista */
    }
    if (categories.includes(newCategory)) {
      return;
    }
    console.log("Estoy agregando categorias");
    setCategories((cat) => [...cat, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
