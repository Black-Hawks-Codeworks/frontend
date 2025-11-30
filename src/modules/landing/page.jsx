import styles from './page.module.css';
import Login from '@/modules/landing/components/Login';
import Icon from '@/shared/icon';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.containertop}>
        <div className={styles.loginContainer}>
          <h2 className='header-md'>Login </h2>
          <Login />
        </div>
        <div className={styles.textContainer}>
          <Icon name='Layers' size='xl' />
          <h1 className='header-lg'>Welcome!</h1>
          <h2 className='header-md'> Electronics </h2>
          <h2 className='header-md'>Returns and Repairs Management System</h2>
          <p className={`body-lg ${styles.horde}`}>Please connect to submit or track your requests.</p>
        </div>
      </div>
      <div className={styles.containerbottom}>
        <div className={styles.text2Container}>
          <h2 className='header-md'>About Us</h2>
          <p className={`body-lg ${styles['card-elevation-4']}`}>
            Electronics is a modern, customer‑focused retailer of consumer technology with five physical stores and a
            thriving e‑commerce channel. From smartphones and laptops to home entertainment and smart appliances, we
            help customers choose, purchase, and enjoy the right products with expert guidance and competitive prices.
            Beyond sales, we stand by every purchase with reliable after‑sales support, including streamlined returns
            and professional repairs through our network of certified service partners. Our mission is to make
            technology simple, accessible, and dependable—online and in store—backed by transparent service, fast
            turnaround times, and a commitment to long‑term customer satisfaction.
          </p>
        </div>
        <div>
          <h2 className='header-md'> About the portal</h2>
          <p className={`body-lg ${styles['card-elevation-4']}`}>
            Track and manage your returns and repairs in one place. With our portal, you can start a request in minutes,
            get instant RMA and shipping labels,see real‑time status updates, approve estimates securely, and chat with
            support when needed. Enjoy faster turnaround, fewer phone calls, and full transparency from drop‑off to
            delivery so you always know what’s happening with your device.
          </p>
          <h2 className='header-md'>Contact Us</h2>
          <p className={`body-lg ${styles['card-elevation-4']}`}>
            For support or inquiries about the portal, please reach out to our customer service team at{' '}
            <a href='mailto:support@electronics.com'> support@electronics.com</a>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
