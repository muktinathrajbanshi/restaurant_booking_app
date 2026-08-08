import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.js";

// Create a new booking
// POST /api/bookings
// @access Private
export const createBooking = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

// Get logged in user bookings
// GET /api/bookings/my
// @access Private
export const getMyBookings = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

// Cancel a booking
// PUT /api/bookings/:id/cancel
//
export const cancelBooking = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};
