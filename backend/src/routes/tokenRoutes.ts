import { Router, Request, Response } from "express";
import { validateMultiToken } from "../middlewares/validateMultiToken";
import { PrismaClient } from "@prisma/client";
import { tokenData } from "../types";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const router = Router();
const prisma = new PrismaClient();

// Route to upload coin/token data
router.post("/addnewtoken", validateMultiToken, async (req: Request, res: Response) => {
  const tokensData = req.body.tokens;
  const insertedTokens:any[] = [];
  const failedTokens:{token:tokenData,error:string}[] =[]
  
  try {

    await Promise.all(tokensData.map(
      async (token: tokenData) => {
        try {
          const { name, symbol, contractAddress, circulatingSupply, totalSupply } = token;
          const insertStatus = await prisma.token.create({
            data: {
              name,
              symbol,
              contractAddress,
              circulatingSupply,
              totalSupply
            }
          });
          console.log(`inserted ${name} successfully`);
          insertedTokens.push(insertStatus.name);
          console.log(insertStatus)

        }
        catch (error) {
          if (error instanceof PrismaClientKnownRequestError && error.code === "P2002" ) {
              console.log(`Failed to insert ${token} ,Unique constraint violation`);
              failedTokens.push({token,error:'Unique constraint violation'})
          }
          else{
            console.log(`Failed to insert ${token.name}: ${error}`);
            failedTokens.push({ token, error: "Other error" });
          }

        }
      }));
      //adjusting status code according to situation, 409 for complete failure
      //207 for partial failure
      //201 for success
      let code =201;
      let message =""
      if(insertedTokens.length==0){
        code = 409
        message = "Failed to insert all tokens"
      }
      else if(insertedTokens.length>0 &&  failedTokens.length > 0 ){
        code= 207
        message = "Failed to insert some of the tokens"
      }
      res.status(code).json({
        message: message!=""? message:"Tokens added successfully",
        insertedTokens,
        failedTokens,
      });
  } 
  catch (error: unknown) {
       // Log the error for debugging
    console.error("Unexpected error during insertion", error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown error occurred during token insertion'
    });

  }
});

export default router;
