//import { useRef } from 'react';
import styles from './return-page.module.css';
import CreateForm from '@/shared/forms/create-form';
import Icon from '@/shared/icon';
import { useNavigate } from 'react-router-dom';

export default function ReturnFormPage() {
  const navigate = useNavigate();
  // Το ref δεν είναι απαραίτητο για αυτή τη λογική, αλλά το αφήνουμε εφόσον υπήρχε
  //const fileInputRef = useRef(null);

  // 1. Upload Photo Function
  // Αφαίρεσα το default random ID γιατί πλέον θα παίρνουμε το σωστό ID από το backend
  async function uploadDevicePhoto(deviceId, file) {
    if (!file) {
      throw new Error('No file provided');
    }

    const formData = new FormData();
    formData.append('photo', file);

    try {
      const response = await fetch(`/api/device/${deviceId}/photo`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        // Αν το backend δεν επιστρέφει json στο error, το χειριζόμαστε γενικά
        throw new Error('Upload failed');
      }
      const responseData = await response.json();
      console.log('Photo uploaded:', responseData);

      return responseData;
    } catch (error) {
      console.error('Error uploading photo:', error);
      // Δεν πετάμε το error (throw) για να μην μπλοκάρει η πλοήγηση (navigate)
      // αν αποτύχει μόνο η φωτογραφία
    }
  }

  // 2. Create Process Function
  // Τώρα δέχεται το payload δυναμικά
  async function createProcess(payload) {
    const response = await fetch('/api/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    // Έλεγχος αν το responseData είναι το process object (που έχει processId)
    // Στο backend σου επιστρέφει απευθείας το αντικείμενο newProcess
    if (responseData && responseData.processId) {
      return responseData;
    } else {
      throw new Error('Failed to create process');
    }
  }

  // 3. Main Handler
  async function handleCreateProcess(e) {
    e.preventDefault();

    // Λήψη δεδομένων από τη φόρμα
    // ΣΗΜΕΙΩΣΗ: Για να δουλέψει αυτό, τα inputs στο CreateForm ΠΡΕΠΕΙ να έχουν το attribute name="..."
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    // Λήψη αρχείου
    const fileInput = e.currentTarget.elements.uploadImages;
    const file = fileInput?.files?.[0];

    // Προετοιμασία δεδομένων για το Backend
    // Το backend περιμένει { process, device, user }
    const sendData = {
      process: {
        type: 'return',
        issue: formValues.problemDescription || 'Issue not described',
        status: 'pending',
        // Σημείωση: Το backend θα αγνοήσει το requiredAction που στέλνουμε εδώ
        // και θα βάλει το δικό του string. Αυτό δεν διορθώνεται από εδώ.
      },
      device: {
        category: formValues.productType || 'Device',
        name: formValues.name, // To 'name' από το input
        description: formValues.problemDescription,
        purchaseDate: formValues.purchaseDate,
      },
      user: {
        id: 1, // Hardcoded client ID (όπως απαιτεί το backend req.body.user.id)
      },
    };

    try {
      console.log('Step 1: Creating Process...');
      // Βήμα 1: Δημιουργία της εγγραφής για να πάρουμε το ID
      const createdProcess = await createProcess(sendData);
      console.log('Process created:', createdProcess);

      // Βήμα 2: Ανάκτηση του Device ID
      // Στο backend σου: res.json(newProcess). Το newProcess έχει πεδίο `device` που είναι το ID.
      const newDeviceId = createdProcess.device;

      // Βήμα 3: Αν υπάρχει αρχείο και ID, κάνουμε upload
      if (file && newDeviceId) {
        console.log(`Step 2: Uploading photo for Device ID: ${newDeviceId}...`);
        await uploadDevicePhoto(newDeviceId, file);
      }

      // Βήμα 4: Ολοκλήρωση
      alert('Process created successfully!');
      navigate('/client-dashboard/');
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Failed to create process: ' + error.message);
    }
  }

  return (
    <div className={styles.page}>
      <div className={`${styles.container} card-elevation-5`}>
        {/* Σιγουρέψου ότι το showProblemDescription είναι true για να πάρεις τα δεδομένα */}
        <CreateForm title='Return Form' onSubmit={handleCreateProcess} showProblemDescription={true} />
        <div className={styles.infoBox}>
          <p className='header-md'>Need help?</p>
          <ul className='body-xl'>
            <li>
              <Icon name='Edit2' size='md' />
              <b>Fill</b> in all required fields (marked with *).
            </li>
            <li>
              <Icon name='InfoSquare' size='md' />
              <span>
                <b>Ensure</b> the product is safely packed (preferably in original packaging).
              </span>
            </li>
            <li>
              <Icon name='Image1' size='md' />
              <b>Attach</b> clear photos of the product if available.
            </li>
            <li>
              <Icon name='Send' size='md' />
              <b>Submit</b> your request and wait for confirmation email.
            </li>
            <li>
              <Icon name='Search1' size='md' />
              <b>Track</b>
              {' your request in the "Dashboard" section.'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
