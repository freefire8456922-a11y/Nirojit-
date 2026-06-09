import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/database';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.use('/api/products', async (req, res) => {
  res.json({ message: 'Products endpoint' });
});

app.use('/api/categories', async (req, res) => {
  res.json({ message: 'Categories endpoint' });
});

app.use('/api/offers', async (req, res) => {
  res.json({ message: 'Offers endpoint' });
});

app.use('/api/contact', async (req, res) => {
  res.json({ message: 'Contact endpoint' });
});

app.use('/api/reviews', async (req, res) => {
  res.json({ message: 'Reviews endpoint' });
});

app.use('/api/auth', async (req, res) => {
  res.json({ message: 'Auth endpoint' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});