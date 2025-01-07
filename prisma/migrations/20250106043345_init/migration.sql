-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "account_no" TEXT NOT NULL,
    "account_type" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "customer_id" INTEGER NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bank_account_no_key" ON "Bank"("account_no");

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
