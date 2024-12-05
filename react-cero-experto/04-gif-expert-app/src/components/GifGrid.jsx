import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log(images);
  console.log(isLoading);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando</h2>}

      <div className="card-grid">
        {images.map((image) => (
          // Con el operador spread,puedes pasar todos los atributos de la imagen
          // El GifItem recibe todas las propiedades por separado.
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
