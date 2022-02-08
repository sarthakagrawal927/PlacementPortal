/*
  Warnings:

  - A unique constraint covering the columns `[step,jobID]` on the table `Shortlist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Shortlist_step_jobID_key" ON "Shortlist"("step", "jobID");
