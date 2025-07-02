import express from 'express';
import cors from 'cors';
import pixRoutes from './routes/pixRoutes.js';

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use('/', pixRoutes);

export default app;