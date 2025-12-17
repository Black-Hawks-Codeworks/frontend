// AboutPage.jsx (or .js)
import './about-page.css';
import Carousel from './carousel';
import { personaldata } from './personal_info';
import photo1 from '../../assets/Photos/photo1.jpeg';
import photo2 from '../../assets/Photos/photo2.jpeg';
import photo3 from '../../assets/Photos/photo3.jpeg';
import photo4 from '../../assets/Photos/photo4.jpeg';
import photo5 from '../../assets/Photos/photo5.jpeg';
import photo6 from '../../assets/Photos/photo6.jpeg';
import photo7 from '../../assets/Photos/photo7.jpeg';

// Map each id to the corresponding imported image
const photosById = {
  1: photo1,
  2: photo2,
  3: photo3,
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
                <div className='personalName'>
                  <a className='personalName' href={personal.linkedin} target='_blank' rel='noreferrer'>
                    {personal.name}
                  </a>
                </div>
                <div className='personalBio body-sm '>{personal.bio}</div>
              </div>
            </div>
          ))}
        </div>

        <div className='body-md c1'>
          <h2> Few things about the project </h2>
          <p>
            We’re doing this because returning a broken gadget shouldn’t feel like tossing a message in a bottle and
            hoping it comes back fixed. We want the customer to open a single page, see “pickup tomorrow, back next
            week,” and never have to send an angry e-mail again. We want the employee to stop juggling sticky notes and
            start clicking one button that sets everything in motion and we want the repair crew to look like heroes who
            finish on time instead of magicians who disappear. Most of all, we want customers to check the same page at
            2 a.m. or 2 p.m. and instantly see exactly where their product is, what’s being done to it, and when it will
            be back in their hands—no phone calls, no uncertainty, just calm transparency.
          </p>
          <div className='image-links'>
            <a href='https://github.com/Black-Hawks-Codeworks' target='_blank' rel='noopener noreferrer'>
              <img className='clickable-photo' src='src/assets/Photos/github.jpeg' alt='Description of first' />
            </a>
            <a
              href='https://www.notion.so/CAPSTONE-PROJECT-BlackHawks-29957318d7e8804193bcda91e31ff7d4'
              target='_blank'
              rel='noopener noreferrer'>
              <img className='clickable-photo' src='src/assets/Photos/notion.jpeg' alt='Description of first' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
