/*
  Warnings:

  - The values [IDEM] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - The values [TEST_ONE,TEST_TWO] on the enum `Step` will be removed. If these variants are still used in the database, this will fail.
  - The values [DEPTARTMENT] on the enum `UserType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `twevethID` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `eligibilityId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `educationId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `identificationId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `skyeID` on the `Student` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[twelfthID]` on the table `Education` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eligibilityID]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[companyID]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[skypeID]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[identificationID]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[educationID]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bond` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eligibilityID` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasBond` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `educationID` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `identificationID` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skypeID` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('CORE', 'ITES');
ALTER TABLE "Job" ALTER COLUMN "category" DROP DEFAULT;
ALTER TABLE "Job" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
ALTER TABLE "Job" ALTER COLUMN "category" SET DEFAULT 'CORE';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Step_new" AS ENUM ('ELIGIBILITY', 'REGISTRATION', 'ONLINE_TEST_I', 'ONLINE_TEST_II', 'INTERVIEW', 'SELECTED');
ALTER TABLE "Shortlist" ALTER COLUMN "step" DROP DEFAULT;
ALTER TABLE "Shortlist" ALTER COLUMN "step" TYPE "Step_new" USING ("step"::text::"Step_new");
ALTER TYPE "Step" RENAME TO "Step_old";
ALTER TYPE "Step_new" RENAME TO "Step";
DROP TYPE "Step_old";
ALTER TABLE "Shortlist" ALTER COLUMN "step" SET DEFAULT 'ELIGIBILITY';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "UserType_new" AS ENUM ('STUDENT', 'DEPARTMENT', 'PLACEMENT');
ALTER TABLE "User" ALTER COLUMN "userType" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "userType" TYPE "UserType_new" USING ("userType"::text::"UserType_new");
ALTER TYPE "UserType" RENAME TO "UserType_old";
ALTER TYPE "UserType_new" RENAME TO "UserType";
DROP TYPE "UserType_old";
ALTER TABLE "User" ALTER COLUMN "userType" SET DEFAULT 'STUDENT';
COMMIT;

-- DropForeignKey
ALTER TABLE "Education" DROP CONSTRAINT "Education_twevethID_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_eligibilityId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_educationId_fkey";

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_identificationId_fkey";

-- DropIndex
DROP INDEX "Education_twevethID_key";

-- DropIndex
DROP INDEX "Job_companyId_key";

-- DropIndex
DROP INDEX "Job_eligibilityId_key";

-- DropIndex
DROP INDEX "Student_educationId_key";

-- DropIndex
DROP INDEX "Student_identificationId_key";

-- DropIndex
DROP INDEX "Student_skyeID_key";

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "twevethID",
ADD COLUMN     "twelfthID" TEXT;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "companyId",
DROP COLUMN "eligibilityId",
ADD COLUMN     "bond" TEXT NOT NULL,
ADD COLUMN     "eligibilityID" TEXT NOT NULL,
ADD COLUMN     "hasBond" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "educationId",
DROP COLUMN "identificationId",
DROP COLUMN "skyeID",
ADD COLUMN     "educationID" TEXT NOT NULL,
ADD COLUMN     "identificationID" TEXT NOT NULL,
ADD COLUMN     "skypeID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Education_twelfthID_key" ON "Education"("twelfthID");

-- CreateIndex
CREATE UNIQUE INDEX "Job_eligibilityID_key" ON "Job"("eligibilityID");

-- CreateIndex
CREATE UNIQUE INDEX "Job_companyID_key" ON "Job"("companyID");

-- CreateIndex
CREATE UNIQUE INDEX "Student_skypeID_key" ON "Student"("skypeID");

-- CreateIndex
CREATE UNIQUE INDEX "Student_identificationID_key" ON "Student"("identificationID");

-- CreateIndex
CREATE UNIQUE INDEX "Student_educationID_key" ON "Student"("educationID");

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_twelfthID_fkey" FOREIGN KEY ("twelfthID") REFERENCES "Academics"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_eligibilityID_fkey" FOREIGN KEY ("eligibilityID") REFERENCES "Eligibility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_identificationID_fkey" FOREIGN KEY ("identificationID") REFERENCES "Identification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_educationID_fkey" FOREIGN KEY ("educationID") REFERENCES "Education"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
