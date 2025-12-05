import styles from './return-form.module.css';

export default function ReturnFormPage() {
  return (
    <div className={styles.container}>
      <form className={`${styles.form} card-elevation-3`}>
        <p className="header-md">RETURN FORM</p>

        <div className={styles.row}>
          <label htmlFor="product-type">Product Type*</label>
          <select id="product-type" name="product-type" required>
            <option value="">Select a product</option>
            <option value="smartphone">Smartphone</option>
            <option value="laptop">Laptop</option>
            <option value="tablet">Tablet</option>
            <option value="pc">Desktop PC</option>
            <option value="tv">TV</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.row}>
          <label htmlFor="serial-number">Serial Number*</label>
          <input id="serial-number" type="text" name="serial-number" required />
        </div>

        <div className={styles.row}>
          <label htmlFor="purchase-date">Purchase date*</label>
          <input id="purchase-date" type="date" name="purchase-date" required />
        </div>


        <div className={styles.row}>
          <label htmlFor="upload-images">Upload images (optional)</label>
          <input
            id="upload-images"
            type="file"
            name="upload-images"
            multiple
            accept="image/*"
          />
        </div>

        <button type="submit" className={`${styles.smallBtn} btn-contained`}>
          SUBMIT
        </button>
      </form>

      <div className={`${styles.infoBox} card-elevation-3`}>
        <p className="header-md">INFO</p>
        <ol>
          <li>Fill in all required fields (marked with *).</li>
          <li>
            Make sure the product is safely packed (preferably in original
            packaging).
          </li>
          <li>Attach clear photos of the product/issue if available.</li>
          <li>Submit your return request and wait for confirmation email.</li>
          <li>{'Track your return in the "Your Parcel" section.'}</li>
        </ol>
      </div>
    </div>
  );
}
