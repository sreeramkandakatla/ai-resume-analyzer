// src/pages/Home.jsx
function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to AI Resume Analyzer</h1>
      <p className="mb-6 max-w-md text-gray-700">
        Upload your resume and let AI help you analyze it, match it to job descriptions, and prepare for interviews.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  )
}

export default Home
