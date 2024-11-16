import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // Para que no se vuelva a disparar el Hook.
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
