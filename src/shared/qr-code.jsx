import { QRCodeSVG } from 'qrcode.react';
import styles from './qr-code.module.css';
import { useState } from 'react';

export default function QrCode() {
  const [isOpen, setIsOpen] = useState(false);

  const isVercelHost = window.location.hostname.includes('vercel');
  const urlCamunda = 'https://dev.ohi-stin-camunda-nai-ston-erota.site/';
  const urlVercel = 'https://frontend-eight-mu-43.vercel.app/';
  const url = isVercelHost ? urlVercel : urlCamunda;

  return (
    <div className={isOpen ? styles.containerOpen : styles.containerClosed}>
      <button className={styles.closeButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '>' : '<'}
      </button>
      <div className={styles.qrCodeContent}>
        <p className='body-md text-color-grey-dark'>Scan the QR code to access the website</p>
        <QRCodeSVG value={url} size={220} level='H' />
        <p className='body-md text-color-grey-dark'>
          danis@123456 <span className={styles.roleText}>client</span>
        </p>
        <p className='body-md text-color-grey-dark'>
          nikol@123456 <span className={styles.roleText}>employee</span>
        </p>
        <p className='body-md text-color-grey-dark'>
          ilias@123456 <span className={styles.roleText}>technician</span>
        </p>
        <p className='body-md text-color-grey-dark'>
          vasiliki@9dahtila <span className={styles.roleText}>manager</span>
        </p>
      </div>
    </div>
  );
}
