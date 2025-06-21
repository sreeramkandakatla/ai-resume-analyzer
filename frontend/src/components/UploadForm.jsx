import React, { useState } from 'react';

const UploadForm = () => {
  const [resume, setResume] = useState(null);
  const [jobDesc, setJobDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
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

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/resume/analyze`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze resume');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      alert(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
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
        <label className="block font-medium mb-2">
          Job Description <span className="text-red-500">*</span>
        </label>
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
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Analyze Resume'}
      </button>

      {loading && <p className="text-blue-600 mt-4">Analyzing your resume...</p>}

      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Analysis Result:</h3>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </form>
  );
};

export default UploadForm;
