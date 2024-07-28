-- CreateTable
CREATE TABLE "TokenLiveData" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "hourlyChange" INTEGER,
    "dailyChange" INTEGER,
    "weeklyChange" INTEGER,
    "marketCap" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "tokenId" INTEGER NOT NULL,

    CONSTRAINT "TokenLiveData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TokenLiveData_tokenId_key" ON "TokenLiveData"("tokenId");

-- AddForeignKey
ALTER TABLE "TokenLiveData" ADD CONSTRAINT "TokenLiveData_tokenId_fkey" FOREIGN KEY ("tokenId") REFERENCES "Token"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
