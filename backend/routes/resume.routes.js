// backend/routes/resume.routes.js
import express from 'express';
import { analyzeResume } from '../controllers/resume.controller.js';

const router = express.Router();

router.post('/analyze', analyzeResume);

export default router;
