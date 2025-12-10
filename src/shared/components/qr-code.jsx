import { QRCodeSVG } from 'qrcode.react';
import styles from './qr-code.module.css';
import { useState } from 'react';

export default function QrCode() {
  const [isOpen, setIsOpen] = useState(true);
  const url = 'https://dev.ohi-stin-camunda-nai-ston-erota.site/';

  return (
    <div className={isOpen ? styles.containerOpen : styles.containerClosed}>
      <button className={styles.closeButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '>' : '<'}
      </button>
      <QRCodeSVG value={url} size={220} level='H' />
    </div>
  );
}
