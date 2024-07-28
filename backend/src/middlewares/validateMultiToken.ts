import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { tokenData } from "../types";

export const validateMultiToken = [
  body("tokens").isArray().withMessage("Tokens must be an array"),
  body("tokens.*.name").isString().withMessage("Invalid name"),
  body("tokens.*.symbol").isString().withMessage("Invalid symbol"),
  body("tokens.*.circulatingSupply").optional().isNumeric().withMessage("Invalid circulating supply"),
  body("tokens.*.totalSupply").optional().isString().withMessage("Invalid total supply, please send it as string"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  }
];
