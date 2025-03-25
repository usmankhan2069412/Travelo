import express from 'express';
import { createPaymentIntent, updateBookingPaymentStatus } from '../Controller/payment.controller.js';

const router = express.Router();

router.post('/create-payment-intent', createPaymentIntent);
router.post('/update-payment-status', updateBookingPaymentStatus);

export default router;