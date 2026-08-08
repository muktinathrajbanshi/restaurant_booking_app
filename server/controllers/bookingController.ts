import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.js";
import { Restaurant } from "../models/Restaurant.js";

// Create a new booking
// POST /api/bookings
// @access Private
export const createBooking = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        
        const {restaurantId, date, time, guests, occasion, specialRequests} = req.body;

        if (!restaurantId || !date || !time || !guests) {
            res.status(400).json({ message: "Please provide all required reservation details" });
            return;
        }

        // Check if restaurant exists
        const restaurant = await Restaurant.findById(restaurantId)
        if(!restaurant) {
            res.status(404).json({ message: "Restaurant not found" });
            return;
        }

        // Verify restaurant is approved
        if (restaurant.status !== "approved")

    } catch (error: any) {
        console.error(error);
        res.status(400).json({ message: error.message })
    }
}

// Get logged in user bookings
// GET /api/bookings/my
// @access Private
export const getMyBookings = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        
    } catch (error: any) {
        console.error(error);
        res.status(400).json({ message: error.message })
    }
}

// Cancel a booking
// PUT /api/bookings/:id/cancel
// 
export const cancelBooking = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        
    } catch (error: any) {
        console.error(error);
        res.status(400).json({ message: error.message })
    }
}