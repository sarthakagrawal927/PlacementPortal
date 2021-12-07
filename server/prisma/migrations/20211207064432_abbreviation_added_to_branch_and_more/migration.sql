/*
  Warnings:

  - You are about to drop the column `name` on the `Academics` table. All the data in the column will be lost.
  - You are about to drop the column `additionalBacklogs` on the `Eligibility` table. All the data in the column will be lost.
  - The `ctc` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `abbreviation` to the `Branch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Academics" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "Branch" ADD COLUMN     "abbreviation" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Eligibility" DROP COLUMN "additionalBacklogs",
ADD COLUMN     "additionalRequirement" TEXT;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "ctc",
ADD COLUMN     "ctc" INTEGER;

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "middleName" DROP NOT NULL;
