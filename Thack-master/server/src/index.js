import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';
import { getDatabase } from './database/database.js';

dotenv.config();
getDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);

try {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} catch (error) {
  console.error("Error starting server:", error);
}