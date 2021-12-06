-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('STUDENT', 'DEPTARTMENT', 'PLACEMENT');

-- CreateEnum
CREATE TYPE "Step" AS ENUM ('ELIGIBILITY', 'REGISTRATION', 'TEST_ONE', 'TEST_TWO', 'INTERVIEW', 'SELECTED');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('CORE', 'IDEM');

-- CreateEnum
CREATE TYPE "OfferType" AS ENUM ('P', 'I', 'P_PLUS_I');

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userType" "UserType" NOT NULL DEFAULT E'STUDENT',
    "departmentID" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "organization" TEXT NOT NULL,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Identification" (
    "id" TEXT NOT NULL,
    "aadharNumber" TEXT,
    "panNumber" TEXT,
    "passportNumber" TEXT,

    CONSTRAINT "Identification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Academics" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "school" TEXT NOT NULL,
    "yearOfCompletion" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "board" TEXT NOT NULL,

    CONSTRAINT "Academics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Semester" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gpa" DOUBLE PRECISION NOT NULL,
    "backlogs" INTEGER NOT NULL,
    "credits" INTEGER NOT NULL,
    "dateChanges" INTEGER NOT NULL,
    "educationId" TEXT,

    CONSTRAINT "Semester_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL,
    "jeeMainRank" TEXT,
    "jeeAdancedRank" TEXT,
    "metRank" TEXT,
    "tenthID" TEXT NOT NULL,
    "twevethID" TEXT,
    "diplomaID" TEXT,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shortlist" (
    "id" TEXT NOT NULL,
    "step" "Step" NOT NULL,
    "jobId" TEXT,

    CONSTRAINT "Shortlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eligibility" (
    "id" TEXT NOT NULL,
    "cgpa" DOUBLE PRECISION NOT NULL,
    "tenthScore" DOUBLE PRECISION,
    "twelfthScore" DOUBLE PRECISION,
    "diplomaScore" DOUBLE PRECISION,
    "numberOfBacklogs" INTEGER NOT NULL,
    "additionalBacklogs" INTEGER NOT NULL,

    CONSTRAINT "Eligibility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "companyID" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "description" TEXT NOT NULL,
    "ctc" TEXT NOT NULL,
    "stipend" INTEGER NOT NULL,
    "registrationDeadline" TIMESTAMP(3) NOT NULL,
    "hrContact" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "offerType" "OfferType" NOT NULL,
    "isSpot" BOOLEAN NOT NULL,
    "eligibilityId" TEXT NOT NULL,
    "companyId" TEXT,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "aboutCompany" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPreference" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "preference" INTEGER NOT NULL,
    "studentID" TEXT,

    CONSTRAINT "CompanyPreference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "regNo" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "altEmail" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "altPhoneNumber" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "permanentAddress" TEXT NOT NULL,
    "currentAddress" TEXT NOT NULL,
    "skyeID" TEXT NOT NULL,
    "linkedinID" TEXT NOT NULL,
    "preferredCompany" TEXT NOT NULL,
    "physicalDisability" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "fatherID" TEXT NOT NULL,
    "motherID" TEXT NOT NULL,
    "identificationId" TEXT NOT NULL,
    "educationId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "_ShortlistToStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_JobToStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Semester_educationId_key" ON "Semester"("educationId");

-- CreateIndex
CREATE UNIQUE INDEX "Education_tenthID_key" ON "Education"("tenthID");

-- CreateIndex
CREATE UNIQUE INDEX "Education_twevethID_key" ON "Education"("twevethID");

-- CreateIndex
CREATE UNIQUE INDEX "Education_diplomaID_key" ON "Education"("diplomaID");

-- CreateIndex
CREATE UNIQUE INDEX "Job_eligibilityId_key" ON "Job"("eligibilityId");

-- CreateIndex
CREATE UNIQUE INDEX "Job_companyId_key" ON "Job"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_regNo_key" ON "Student"("regNo");

-- CreateIndex
CREATE UNIQUE INDEX "Student_phoneNumber_key" ON "Student"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Student_skyeID_key" ON "Student"("skyeID");

-- CreateIndex
CREATE UNIQUE INDEX "Student_linkedinID_key" ON "Student"("linkedinID");

-- CreateIndex
CREATE UNIQUE INDEX "Student_fatherID_key" ON "Student"("fatherID");

-- CreateIndex
CREATE UNIQUE INDEX "Student_motherID_key" ON "Student"("motherID");

-- CreateIndex
CREATE UNIQUE INDEX "Student_identificationId_key" ON "Student"("identificationId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_educationId_key" ON "Student"("educationId");

-- CreateIndex
CREATE UNIQUE INDEX "_ShortlistToStudent_AB_unique" ON "_ShortlistToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_ShortlistToStudent_B_index" ON "_ShortlistToStudent"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_JobToStudent_AB_unique" ON "_JobToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_JobToStudent_B_index" ON "_JobToStudent"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_departmentID_fkey" FOREIGN KEY ("departmentID") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Semester" ADD CONSTRAINT "Semester_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Education"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_tenthID_fkey" FOREIGN KEY ("tenthID") REFERENCES "Academics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_twevethID_fkey" FOREIGN KEY ("twevethID") REFERENCES "Academics"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_diplomaID_fkey" FOREIGN KEY ("diplomaID") REFERENCES "Academics"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shortlist" ADD CONSTRAINT "Shortlist_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_eligibilityId_fkey" FOREIGN KEY ("eligibilityId") REFERENCES "Eligibility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPreference" ADD CONSTRAINT "CompanyPreference_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "Student"("userID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_fatherID_fkey" FOREIGN KEY ("fatherID") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_motherID_fkey" FOREIGN KEY ("motherID") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_identificationId_fkey" FOREIGN KEY ("identificationId") REFERENCES "Identification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Education"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShortlistToStudent" ADD FOREIGN KEY ("A") REFERENCES "Shortlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShortlistToStudent" ADD FOREIGN KEY ("B") REFERENCES "Student"("userID") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToStudent" ADD FOREIGN KEY ("A") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobToStudent" ADD FOREIGN KEY ("B") REFERENCES "Student"("userID") ON DELETE CASCADE ON UPDATE CASCADE;
