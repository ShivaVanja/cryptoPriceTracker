/*
  Warnings:

  - The `totalSupply` column on the `Token` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Token" DROP COLUMN "totalSupply",
ADD COLUMN     "totalSupply" INTEGER DEFAULT -1;
