import { createContext, useEffect, useState } from 'react';
import { IMAGE_QUERY } from './query';

export const ImageContext = createContext();

export default function ImageProvider({ children }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('https://green-thumb-club-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: IMAGE_QUERY,
        }),
      });
      const data = await response.json();
      setImages(data.data.images.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return <ImageContext.Provider value={{ images, loading }}>{children}</ImageContext.Provider>;
}
