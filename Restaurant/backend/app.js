import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js"; // Added space for readability
import { errorMiddleware } from "./error/error.js"; // Added space for readability
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: "./config/config.env" });

// Connect to the database
dbConnection();

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use('/api/v1/reservation', reservationRouter);

// Error handling middleware
app.use(errorMiddleware);

export default app;
