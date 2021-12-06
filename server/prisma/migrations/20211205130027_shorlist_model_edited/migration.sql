/*
  Warnings:

  - Made the column `studentID` on table `CompanyPreference` required. This step will fail if there are existing NULL values in that column.
  - Made the column `companyId` on table `Job` required. This step will fail if there are existing NULL values in that column.
  - Made the column `educationId` on table `Semester` required. This step will fail if there are existing NULL values in that column.
  - Made the column `jobId` on table `Shortlist` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CompanyPreference" DROP CONSTRAINT "CompanyPreference_studentID_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Semester" DROP CONSTRAINT "Semester_educationId_fkey";

-- DropForeignKey
ALTER TABLE "Shortlist" DROP CONSTRAINT "Shortlist_jobId_fkey";

-- AlterTable
ALTER TABLE "CompanyPreference" ALTER COLUMN "studentID" SET NOT NULL;

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "category" SET DEFAULT E'CORE',
ALTER COLUMN "offerType" SET DEFAULT E'P',
ALTER COLUMN "companyId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Semester" ALTER COLUMN "educationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Shortlist" ALTER COLUMN "step" SET DEFAULT E'ELIGIBILITY',
ALTER COLUMN "jobId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Education"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shortlist" ADD CONSTRAINT "Shortlist_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPreference" ADD CONSTRAINT "CompanyPreference_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "Student"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
