import FeatureBlock from '../components/FeatureBlock';
import GalleryBlock from '../components/GalleryBlock';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProductsBlocks from '../components/ProductsBlock';
import ImageProvider from '../context/ImageContext';
import ProductProvider from '../context/ProductContext';

export default function Home() {
  return (
    <ProductProvider>
      <ImageProvider>
        <Navbar />
        <div className="body-container">
          <Hero />
          <ProductsBlocks />
          <GalleryBlock />
          <FeatureBlock />
        </div>
      </ImageProvider>
    </ProductProvider>
  )
} 
