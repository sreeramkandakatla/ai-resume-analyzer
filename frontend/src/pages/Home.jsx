// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">AI Resume Analyzer</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Upload your resume and a job description to get AI insights, resume matching, and interview preparation.
        </p>
        <a
          href="/upload"
          className="inline-block bg-white text-indigo-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What You Can Do</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard title="Analyze Resume" desc="AI reads your resume and gives instant feedback." />
          <FeatureCard title="Match Job Description" desc="Find out how well your resume aligns with a job role." />
          <FeatureCard title="Practice Interviews" desc="Train with an AI that mimics real interview scenarios." />
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-2xl mx-auto text-lg space-y-6">
          <Step number="1" text="Paste your job description (required) and upload your resume." />
          <Step number="2" text="View detailed AI-powered analysis." />
          <Step number="3" text="Chat with our AI to simulate interview questions." />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} AI Resume Analyzer. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, desc }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const Step = ({ number, text }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
      {number}
    </div>
    <p>{text}</p>
  </div>
);

export default Home;
