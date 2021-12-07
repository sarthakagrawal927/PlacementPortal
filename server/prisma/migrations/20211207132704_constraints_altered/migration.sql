/*
  Warnings:

  - You are about to drop the column `educationId` on the `Semester` table. All the data in the column will be lost.
  - You are about to drop the column `jobId` on the `Shortlist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentID]` on the table `CompanyPreference` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[educationID]` on the table `Semester` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[jobID]` on the table `Shortlist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `educationID` to the `Semester` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobID` to the `Shortlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_educationId_fkey";

-- DropForeignKey
ALTER TABLE "Shortlist" DROP CONSTRAINT "Shortlist_jobId_fkey";

-- DropIndex
DROP INDEX "Job_companyID_key";

-- DropIndex
DROP INDEX "Semester_educationId_key";

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "isSpot" SET DEFAULT true,
ALTER COLUMN "hasBond" SET DEFAULT false,
ALTER COLUMN "registrationStartDate" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Semester" DROP COLUMN "educationId",
ADD COLUMN     "educationID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Shortlist" DROP COLUMN "jobId",
ADD COLUMN     "jobID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CompanyPreference_studentID_key" ON "CompanyPreference"("studentID");

-- CreateIndex
CREATE UNIQUE INDEX "Semester_educationID_key" ON "Semester"("educationID");

-- CreateIndex
CREATE UNIQUE INDEX "Shortlist_jobID_key" ON "Shortlist"("jobID");

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_educationID_fkey" FOREIGN KEY ("educationID") REFERENCES "Education"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shortlist" ADD CONSTRAINT "Shortlist_jobID_fkey" FOREIGN KEY ("jobID") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
