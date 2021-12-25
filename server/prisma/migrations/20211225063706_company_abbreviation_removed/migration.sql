/*
  Warnings:

  - You are about to drop the column `abbreviation` on the `Company` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Company_abbreviation_key";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "abbreviation";
