import styles from './loading.module.css';

const Loading = ({ message = 'Fetching Data' }) => {
  return (
    <div className={styles.container}>
      <span className={styles.spinner}></span>
      <p className={styles.text}>{message}</p>
    </div>
  );
};

export default Loading;
