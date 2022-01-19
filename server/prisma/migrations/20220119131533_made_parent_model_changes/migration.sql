/*
  Warnings:

  - Made the column `phoneNumber` on table `Parent` required. This step will fail if there are existing NULL values in that column.
  - Made the column `occupation` on table `Parent` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Parent" ALTER COLUMN "phoneNumber" SET NOT NULL,
ALTER COLUMN "occupation" SET NOT NULL;
