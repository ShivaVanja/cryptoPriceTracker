-- DropIndex
DROP INDEX "Token_contractAddress_key";

-- AlterTable
ALTER TABLE "Token" ALTER COLUMN "contractAddress" SET DEFAULT 'N/A';
