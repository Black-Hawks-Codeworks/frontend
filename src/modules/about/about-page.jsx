// AboutPage.jsx (or .js)
import './about-page.css';
import Carousel from './carousel';
import { personaldata } from './personal_info';

// Adjust the path (../ or ../../) according to where AboutPage.jsx is located
// Assuming AboutPage.jsx is two levels below src (e.g. src/components/pages/AboutPage.jsx):
// If it's only one level (e.g. src/pages/AboutPage.jsx), change ../../ to ../

// Import ALL photos (note: photoX.jpeg)
import photo1 from '../../assets/Photos/photo1.jpeg';
import photo2 from '../../assets/Photos/photo2.jpeg';

import photo4 from '../../assets/Photos/photo4.jpeg';
import photo5 from '../../assets/Photos/photo5.jpeg';
import photo6 from '../../assets/Photos/photo6.jpeg';
import photo7 from '../../assets/Photos/photo7.jpeg';

// Map each id to the corresponding imported image
const photosById = {
  1: photo1,
  2: photo2,

  4: photo4,
  5: photo5,
  6: photo6,
  7: photo7,
};

export default function AboutPage() {
  return (
    <div className='title'>
      <h1>About us</h1>
      <div className='container'>
        <div className='carousel'>
          <Carousel />
        </div>

        <div className='personalInfoArea'>
          {personaldata.map((personal) => (
            <div className='pcard' key={personal.id}>
              <div className='personalPhoto'>
                <img src={photosById[personal.id]} alt={personal.name} />
              </div>
              <div className='personalText'>
                <div className='personalName'>{personal.name}</div>
                <div className='personalBio'>{personal.bio}</div>
              </div>
            </div>
          ))}
        </div>

        <div className='c1'>
          <p>Project Info</p>
        </div>
      </div>
    </div>
  );
}
