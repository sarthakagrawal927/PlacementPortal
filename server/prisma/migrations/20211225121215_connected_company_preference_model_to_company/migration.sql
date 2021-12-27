/*
  Warnings:

  - You are about to drop the column `company` on the `CompanyPreference` table. All the data in the column will be lost.
  - Added the required column `companyID` to the `CompanyPreference` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompanyPreference" DROP COLUMN "company",
ADD COLUMN     "companyID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CompanyPreference" ADD CONSTRAINT "CompanyPreference_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
