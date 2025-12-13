import { QRCodeSVG } from 'qrcode.react';
import styles from './qr-code.module.css';
import { useState, useEffect } from 'react';
import { useMatch } from 'react-router-dom';

export default function QrCode() {
  const [isOpen, setIsOpen] = useState(false);
  const url = 'https://dev.ohi-stin-camunda-nai-ston-erota.site/';
  // to match einai to path tou "/" route h null an den eimaste sto root("/")
  const match = useMatch('/');
  // otan allaze to match apo null se object, tote to setIsOpen(true)
  useEffect(() => {
    if (match) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [match]);
  // console.log(match);
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
