-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "preferredCompany" DROP NOT NULL,
ALTER COLUMN "physicalDisability" DROP NOT NULL,
ALTER COLUMN "physicalDisability" SET DEFAULT E'NONE';
