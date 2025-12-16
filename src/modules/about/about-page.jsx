import './about-page.css';
import Carousel from './carousel';

export default function AboutPage() {
  return (
    <div className='container'>
      <div className='a1'>
        <Carousel />
      </div>
      <div className='b1'>
        <p> Info about the team</p>
        <div> </div>
      </div>
      <div className='c1'>
        <p> Project Info</p>
      </div>
    </div>
  );
}
