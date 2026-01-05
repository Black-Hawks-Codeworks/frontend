import { useRef } from 'react';
import styles from './return-page.module.css';
import CreateForm from '@/shared/forms/create-form';
import Icon from '@/shared/icon';
import { useNavigate } from 'react-router-dom';

export default function ReturnFormPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  // auta logika tha boune se ena share hook gia repair kai return
  //kane upload photo gia device
  async function uploadDevicePhoto(deviceId = Math.floor(Math.random() * 1000000), file) {
    if (!file) {
      throw new Error('No file provided');
    }

    const formData = new FormData();
    formData.append('photo', file);

    // Log FormData contents for debugging
    console.log('FormData entries:');
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ', pair[1]);
    }

    try {
      const response = await fetch(`/api/device/${deviceId}/photo`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Upload failed');
      }
      const responseData = await response.json();
      console.log('Photo uploaded:', responseData);

      return responseData;
    } catch (error) {
      console.error('Error uploading photo:', error);
      throw error;
    }
  }
  //dimiourse ena process
  async function createProcess(e) {
    e.preventDefault();
    const processData = {
      type: 'return',
      clientId: 1,
      deviceId: 1,
      issue: 'Issue',
      status: 'pending',
      requiredAction: 'noActionRequired',
    };
    const deviceData = {
      category: 'device',
      name: 'Device Name',
      description: 'Device Description',
      image: null,
      serialNumber: 'Device Serial Number',
      purchaseDate: 'Device Purchase Date',
    };
    const clientData = {
      name: 'Client Name',
      email: 'Client Email',
      phone: 'Client Phone',
      address: 'Client Address',
    };
    const sendData = {
      process: processData,
      device: deviceData,
      client: clientData,
    };
    const response = await fetch('/api/process', {
      method: 'POST',
      body: JSON.stringify(sendData),
    });
    const responseData = await response.json();
    console.log('responseData', responseData);
    if (responseData.success) {
      navigate('/client-dashboard/');
    } else {
      alert('Failed to create process');
    }
  }

  async function handleCreateProcess(e) {
    e.preventDefault();
    // Get the file input using form elements (avoids querySelector)
    const fileInput = e.target.elements.uploadImages;
    // Store reference in ref for future use
    fileInputRef.current = fileInput;
    const file = fileInput?.files?.[0]; // Get the first file from FileList

    if (!file) {
      console.error('No file selected');
      alert('Please select a photo to upload');
      return;
    }

    console.log('Uploading file:', file.name, file.type, file.size);
    try {
      const imageUpload = await uploadDevicePhoto(1, file);
      console.log('imageUpload', imageUpload);

      // Clear the file input after successful upload
      if (fileInput) {
        fileInput.value = '';
        fileInputRef.current = null;
      }

      // await createProcess(e);
      console.log('createProcess', createProcess);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload photo: ' + error.message);
    }
  }
  return (
    <div className={styles.page}>
      <div className={`${styles.container} card-elevation-5`}>
        <CreateForm title='Return Form' onSubmit={handleCreateProcess} />
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
