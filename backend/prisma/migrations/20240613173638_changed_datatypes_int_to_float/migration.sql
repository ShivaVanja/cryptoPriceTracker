/*
  Warnings:

  - The `circulatingSupply` column on the `Token` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `totalSupply` column on the `Token` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Token" DROP COLUMN "circulatingSupply",
ADD COLUMN     "circulatingSupply" DOUBLE PRECISION,
DROP COLUMN "totalSupply",
ADD COLUMN     "totalSupply" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "TokenLiveData" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "hourlyChange" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "dailyChange" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "weeklyChange" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "volume" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "priceChange" SET DATA TYPE DOUBLE PRECISION;
