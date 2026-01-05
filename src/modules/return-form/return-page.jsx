import { useState } from 'react';
import styles from './return-page.module.css';
import CreateForm from '@/shared/forms/create-form';
import Icon from '@/shared/icon';
import { useNavigate } from 'react-router-dom';

// 1. IMPORT ΤΟΥ SELECTOR ΑΠΟ ΤΟ STORE ΣΟΥ
import { useAppSelector } from '@/config/store';

export default function ReturnFormPage() {
  const navigate = useNavigate();

  // 2. ΑΝΑΚΤΗΣΗ ΤΟΥ USER ΑΠΟ ΤΟ REDUX STORE
  // Υποθέτουμε ότι το slice λέγεται 'auth'. Αν δεν δουλέψει, δοκίμασε 'state.user.user'
  const user = useAppSelector((state) => state.auth.user);

  // State για να κλειδώνει το κουμπί
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Upload Photo Function
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
        throw new Error('Upload failed');
      }
      const responseData = await response.json();
      console.log('Photo uploaded:', responseData);

      return responseData;
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  }

  // Create Process Function
  async function createProcess(payload) {
    const response = await fetch('/api/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();

    if (responseData && responseData.processId) {
      return responseData;
    } else {
      throw new Error('Failed to create process');
    }
  }

  // Main Handler
  async function handleCreateProcess(e) {
    e.preventDefault();

    // Έλεγχος αν υπάρχει χρήστης συνδεδεμένος
    if (!user || !user.id) {
      alert('Σφάλμα: Δεν βρέθηκε συνδεδεμένος χρήστης. Παρακαλώ κάντε login ξανά.');
      navigate('/login'); // Ή όπου είναι η σελίδα login
      return;
    }

    // Κλείδωμα κουμπιού
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    const fileInput = e.currentTarget.elements.uploadImages;
    const file = fileInput?.files?.[0];

    const sendData = {
      process: {
        type: 'return',
        issue: formValues.problemDescription || 'Issue not described',
        status: 'pending',
      },
      device: {
        category: formValues.productType || 'Device',
        name: formValues.name,
        description: formValues.problemDescription,
        purchaseDate: formValues.purchaseDate,
      },
      user: {
        // 3. ΧΡΗΣΗ ΤΟΥ REAL USER ID
        id: user.id,
      },
    };

    try {
      console.log('Step 1: Creating Process...');
      const createdProcess = await createProcess(sendData);
      console.log('Process created:', createdProcess);

      const newDeviceId = createdProcess.device;

      if (file && newDeviceId) {
        console.log(`Step 2: Uploading photo for Device ID: ${newDeviceId}...`);
        await uploadDevicePhoto(newDeviceId, file);
      }

      alert('Process created successfully!');
      navigate('/client-dashboard/');
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Failed to create process: ' + error.message);
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={`${styles.container} card-elevation-5`}>
        <CreateForm
          title='Return Form'
          onSubmit={handleCreateProcess}
          showProblemDescription={true}
          isSubmitting={isSubmitting}
        />
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
