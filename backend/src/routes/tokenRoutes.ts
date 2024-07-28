import { Router, Request, Response } from "express";
import { validateMultiToken } from "../middlewares/validateMultiToken";
import { PrismaClient } from "@prisma/client";
import { tokenData } from "../types";

const router = Router();
const prisma = new PrismaClient();

// Route to upload coin/token data
router.post("/addnewtoken", validateMultiToken, async (req: Request, res: Response) => {
  const tokensData = req.body.tokens;

  try {
    const insertedTokens = await Promise.all(tokensData.map(async (token: tokenData) => {
      const { name, symbol, contractAddress, circulatingSupply, totalSupply } = token;
      return await prisma.token.create({
        data: {
          name,
          symbol,
          contractAddress,
          circulatingSupply,
          totalSupply
        }
      });
    }));

    res.status(201).json({ message: 'Tokens added successfully', data: insertedTokens });
  } catch (error: any) {
    res.status(500).json({ error: error});
  }
});

export default router;
