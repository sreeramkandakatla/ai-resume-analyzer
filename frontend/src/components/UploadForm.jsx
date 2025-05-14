// src/components/UploadForm.jsx
import React, { useState } from 'react';

const UploadForm = () => {
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!resume) {
      alert('Please upload your resume.');
      return;
    }

    if (!jobDesc.trim()) {
      alert('Please enter the job description.');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('jobDescription', jobDesc);

    // 🔁 You’ll replace this with actual backend API call
    console.log('Uploading resume and job description...', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Resume Upload */}
      <div>
        <label className="block font-medium mb-2">Upload Resume (PDF or DOCX)</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
          className="block w-full border p-2 rounded"
        />
      </div>

      {/* Job Description Textarea */}
      <div>
        <label className="block font-medium mb-2">Job Description <span className="text-red-500">*</span></label>
        <textarea
          rows="6"
          placeholder="Paste the job description here..."
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          className="block w-full border p-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Analyze Resume
      </button>
    </form>
  );
};

export default UploadForm;
