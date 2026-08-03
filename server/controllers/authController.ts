import { Request, Response } from "express";

// Register a new user
// POST /api/auth/register
export const registerUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
  } catch (error) {}
};

// Authenticate a user & get token
// POST /api/auth/login
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (error) {}
};

// Get user profile
// GET /api/auth/me
// @access Private
export const getMe = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (error) {}
};
