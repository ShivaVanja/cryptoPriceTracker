/*
  Warnings:

  - Made the column `contractAddress` on table `Token` required. This step will fail if there are existing NULL values in that column.
  - Made the column `totalSupply` on table `Token` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Token" ALTER COLUMN "contractAddress" SET NOT NULL,
ALTER COLUMN "totalSupply" SET NOT NULL;
