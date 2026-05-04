import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import projectRoutes from './routes/projectRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => res.send('Portfolio API running'));

app.use('/projects', projectRoutes);
app.use('/messages', messageRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
  })
  .catch(err => console.error('Mongo error:', err.message));
