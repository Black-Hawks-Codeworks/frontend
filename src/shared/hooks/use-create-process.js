import { useNavigate, useMatch } from 'react-router-dom';
import { useAppSelector } from '@/config/store';
import { useState } from 'react';
export function useCreateProcess() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  //koitao sto route gia na do an eimai se repair-form h return-form
  const processType = useMatch('/repair-form') ? 'repair' : 'return';

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
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    const fileInput = e.currentTarget.elements.uploadImages;
    const file = fileInput?.files?.[0];

    const sendData = {
      process: {
        type: processType,
        issue: formValues.problemDescription || 'Issue not described',
      },
      device: {
        category: formValues.productType || 'Device',
        name: formValues.name,
        description: formValues.problemDescription,
        purchaseDate: new Date(formValues.purchaseDate).toISOString(),
      },
      user: {
        id: user.id,
      },
    };

    try {
      console.log(`Step 1: Creating ${processType} Process...`);
      const createdProcess = await createProcess(sendData);
      console.log('Process created:', createdProcess);

      const newDeviceId = createdProcess.device;

      if (file && newDeviceId) {
        console.log(`Step 2: Uploading photo for Device ID: ${newDeviceId}...`);
        await uploadDevicePhoto(newDeviceId, file);
      }

      alert('Repair request created successfully!');
      navigate('/client-dashboard/');
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Failed to create repair request: ' + error.message);
      setIsLoading(false);
    }
  }

  return { handleCreateProcess, isLoading };
}
