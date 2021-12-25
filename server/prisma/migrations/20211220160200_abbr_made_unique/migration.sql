/*
  Warnings:

  - You are about to drop the column `jeeAdancedRank` on the `Education` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[abbreviation]` on the table `Branch` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_educationID_fkey";

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "jeeAdancedRank",
ADD COLUMN     "jeeAdvancedRank" TEXT;

-- AlterTable
ALTER TABLE "Semester" ALTER COLUMN "educationID" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Branch_abbreviation_key" ON "Branch"("abbreviation");

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_educationID_fkey" FOREIGN KEY ("educationID") REFERENCES "Education"("id") ON DELETE SET NULL ON UPDATE CASCADE;
