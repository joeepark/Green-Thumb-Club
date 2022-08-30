import Image from 'next/image';
import hero from '../assests/GTC.png';

export default function Hero() {
  return (
    <div className="hero">
    <Image src={hero} alt="hero-image"/>
    </div>
  );
}
