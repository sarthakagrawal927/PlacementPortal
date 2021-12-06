/*
  Warnings:

  - You are about to drop the column `jobTitle` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `departmentID` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[guardianID]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `registrationStartDate` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branchID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_fatherID_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_motherID_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_departmentID_fkey";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "logo" TEXT,
ALTER COLUMN "aboutCompany" DROP NOT NULL,
ALTER COLUMN "feedback" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Eligibility" ALTER COLUMN "cgpa" DROP NOT NULL,
ALTER COLUMN "numberOfBacklogs" DROP NOT NULL,
ALTER COLUMN "additionalBacklogs" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "jobTitle",
ADD COLUMN     "registrationStartDate" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "ctc" DROP NOT NULL,
ALTER COLUMN "stipend" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Parent" ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "occupation" DROP NOT NULL,
ALTER COLUMN "organization" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Semester" ALTER COLUMN "backlogs" SET DEFAULT 0,
ALTER COLUMN "dateChanges" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "guardianID" TEXT,
ALTER COLUMN "fatherID" DROP NOT NULL,
ALTER COLUMN "motherID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "departmentID",
ADD COLUMN     "branchID" TEXT NOT NULL;

-- DropTable
DROP TABLE "Department";

-- CreateTable
CREATE TABLE "Branch" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BranchToEligibility" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BranchToEligibility_AB_unique" ON "_BranchToEligibility"("A", "B");

-- CreateIndex
CREATE INDEX "_BranchToEligibility_B_index" ON "_BranchToEligibility"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Student_guardianID_key" ON "Student"("guardianID");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_branchID_fkey" FOREIGN KEY ("branchID") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_fatherID_fkey" FOREIGN KEY ("fatherID") REFERENCES "Parent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_motherID_fkey" FOREIGN KEY ("motherID") REFERENCES "Parent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_guardianID_fkey" FOREIGN KEY ("guardianID") REFERENCES "Parent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BranchToEligibility" ADD FOREIGN KEY ("A") REFERENCES "Branch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BranchToEligibility" ADD FOREIGN KEY ("B") REFERENCES "Eligibility"("id") ON DELETE CASCADE ON UPDATE CASCADE;
