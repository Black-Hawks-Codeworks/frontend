import './about-page.css';
import Carousel from './carousel';
import { personaldata } from './personal_info';
import img1 from '../../assets/Photos/cmnd.jpg';

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
                <img src={img1} alt={personal.name} />
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
