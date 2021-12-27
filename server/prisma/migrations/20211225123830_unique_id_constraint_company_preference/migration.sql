/*
  Warnings:

  - A unique constraint covering the columns `[studentID,companyID]` on the table `CompanyPreference` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CompanyPreference_studentID_companyID_key" ON "CompanyPreference"("studentID", "companyID");
