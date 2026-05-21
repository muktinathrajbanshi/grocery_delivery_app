import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

// Get user addresses
// GET /api/addresses
export const getAddresses = async (req:Request, res: Response) => {
    const addresses = await prisma.address.findMany({
        where: {userId: req.user!.id},
        orderBy: {createdAt: "asc"}
    })
    res.json({addresses})
}

// Add address
// POST /api/addresses
