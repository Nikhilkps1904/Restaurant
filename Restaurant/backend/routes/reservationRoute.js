import express from 'express';
import { sendReservation } from '../controller/reservation.js';

const router = express.Router();

// Route to handle sending reservations
router.post("/send", sendReservation);

export default router;
