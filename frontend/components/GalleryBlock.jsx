import { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';


export default function GalleryBlock() {
  const { images, loading } = useContext(ImageContext);
  const GalleryImages = images.slice(1,5)
  
  if (loading === true) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      <hr/>
      <h4 className="gallery-header">More Ways To Find the Perfect Plant</h4>
      <div className="gallery-container">
        {GalleryImages.map((image, index) => (
          <img src={`${image.attributes.image.data.attributes.formats.small.url}`} 
          className="gallery-image"
          key={index}/>
        ))}
      </div>
      <hr />
    </div>
  );
}
