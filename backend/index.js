// backend/index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer'; // ✅ Needed for file upload
import resumeRoutes from './routes/resume.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup
const upload = multer({ dest: 'uploads/' }); // ✅ Store files in /uploads

// Static file serving (optional, for showing uploaded files)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes (✅ attach multer upload to the route path)
app.use('/api/resume', upload.single('resume'), resumeRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
