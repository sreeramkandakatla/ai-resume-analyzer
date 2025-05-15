// backend/controllers/resume.controller.js
import path from 'path';
import { extractTextFromPDF, extractTextFromDocx } from '../utils/extractText.js';

export const analyzeResume = async (req, res) => {
  try {
    const resumeFile = req.file;
    const jobDescription = req.body.jobDescription;

    if (!resumeFile || !jobDescription) {
      return res.status(400).json({ error: 'Resume and job description are required.' });
    }

    const ext = path.extname(resumeFile.originalname).toLowerCase();
    let extractedText = '';

    if (ext === '.pdf') {
      extractedText = await extractTextFromPDF(resumeFile.path);
    } else if (ext === '.docx') {
      extractedText = await extractTextFromDocx(resumeFile.path);
    } else {
      return res.status(400).json({ error: 'Unsupported file type. Please upload a PDF or DOCX file.' });
    }

    res.status(200).json({
      message: 'Resume text extracted successfully.',
      resumeText: extractedText,
      jobDescription,
    });

  } catch (error) {
    console.error('Error analyzing resume:', error);
    res.status(500).json({ error: 'Failed to analyze resume.' });
  }
};
