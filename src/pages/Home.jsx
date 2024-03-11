import { useRef, useEffect } from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Membership from '../components/Membership';
import Platforms from '../components/Platforms';
import Support from '../components/Support';

export default function Carousel() {
  const refCarousel = useRef(null);

  useEffect( () => {
    let move = 200;
    setInterval(() => {
      if (move >= 1300) {
        refCarousel.current.scrollLeft -= move;
        move = 400;
      } else {
        refCarousel.current.scrollLeft += move;
        move += 100;
      }
    }, 1000);
  }, []);

  return (
    <>
      <section className="w-full h-1/2 flex items-center">
        <div className="flex h-1/2 items-center relative">
          <div className="w-full flex overflow-x-hidden scroll-smooth" ref={refCarousel}>
            <img src={require('../images/2a561d0d-cf71-4eec-9e32-e59a0a380072.JPG')} alt="" className="m-1" />
            <img src={require('../images/4ca2a7b3-ffd2-4a7a-a452-e58eed33cec1.JPG')} alt="" className="m-1"  />
            <img src={require('../images/911e6a58-a10a-49c9-bcf4-d7bfdf9a2445.JPG')} alt="" className="m-1" />
            <img src={require('../images/d51862b5-687f-4de9-aaff-c557a67675a7.JPG')} alt="" className="m-1" />
          </div>
        </div>
    </section>
    <About />
    <Support />
    <Platforms />
    <Membership />
    <Footer />
    </>
    
    
  );
};
