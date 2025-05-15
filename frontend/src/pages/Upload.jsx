import React from 'react';
import UploadForm from '../components/UploadForm';

const Upload = () => {
  return (
    <div className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Upload Resume & Job Description</h2>
      <UploadForm />
    </div>
  );
};

export default Upload;
