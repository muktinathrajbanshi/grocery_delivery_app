import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

// Register 
// POST /api/auth/register
export const register = async (req:Request, res: Response) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({ message: "Please provide all fields" })
    }

    const existingUser = await prisma.user.findUnique({ where: {email: email.toLowerCase()}})
}
