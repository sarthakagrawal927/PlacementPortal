import { PrismaClient, Company, Education, Job, User } from "@prisma/client";
import {
	branches,
	companies,
	tenth,
	twefthOrDiplomas,
	semesters,
	educations,
	students,
	parents,
	identifications,
	companyPreferences,
	eligibilities,
	jobs,
	shortlists,
} from "./seedData";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function seed() {
	console.log("Deleting data...");
	await prisma.shortlist.deleteMany({});
	await prisma.companyPreference.deleteMany({});
	await prisma.job.deleteMany({});
	await prisma.eligibility.deleteMany({});
	await prisma.student.deleteMany({});
	await prisma.user.deleteMany({});
	await prisma.education.deleteMany({});
	await prisma.branch.deleteMany({});
	await prisma.parent.deleteMany({});
	await prisma.identification.deleteMany({});
	await prisma.academics.deleteMany({});
	await prisma.semester.deleteMany({});
	await prisma.company.deleteMany({});

	console.log("Adding branches...");
	for (const branch of branches) {
		await prisma.branch.create({
			data: {
				name: branch.name,
				abbreviation: branch.abbreviation,
			},
		});
	}

	console.log("Adding companies...");
	var companyArr: Company[] = [];
	for (const company of companies) {
		companyArr.push(
			await prisma.company.create({
				data: {
					name: company.name,
					aboutCompany: company.aboutCompany,
					feedback: company.feedback,
					logo: company.logo,
				},
			})
		);
	}

	console.log("Adding educations...");
	var idxSem = 0;
	var educationArr: Education[] = [];
	for (const [idx, education] of educations.entries()) {
		educationArr.push(
			await prisma.education.create({
				data: {
					jeeMainRank: education.jeeMainRank,
					jeeAdvancedRank: education.jeeAdvancedRank,
					metRank: education.metRank,
					tenth: {
						create: {
							board: tenth[idx].board,
							school: tenth[idx].school,
							country: tenth[idx].country,
							score: tenth[idx].score,
							yearOfCompletion: tenth[idx].yearOfCompletion,
						},
					},
					semesters: {
						createMany: {
							data: [
								{
									name: semesters[idxSem].name,
									credits: semesters[idxSem].credits,
									gpa: semesters[idxSem].gpa,
									backlogs: semesters[idxSem].backlogs,
								},
								{
									name: semesters[idxSem + 1].name,
									credits: semesters[idxSem + 1].credits,
									gpa: semesters[idxSem + 1].gpa,
									backlogs: semesters[idxSem + 1].backlogs,
								},
							],
						},
					},
				},
			})
		);

		idxSem += 2;
	}

	console.log("Adding academics...");
	for (const [idx, tod] of twefthOrDiplomas.entries()) {
		var pr = Math.random();
		if (pr <= 0.5) {
			await prisma.education.update({
				where: {
					id: educationArr[idx].id,
				},
				data: {
					twelfth: {
						create: {
							board: tod.board,
							school: tod.school,
							country: tod.country,
							score: tod.score,
							yearOfCompletion: tod.yearOfCompletion,
						},
					},
				},
			});
		} else {
			await prisma.education.update({
				where: {
					id: educationArr[idx].id,
				},
				data: {
					diploma: {
						create: {
							board: tod.board,
							school: tod.school,
							country: tod.country,
							score: tod.score,
							yearOfCompletion: tod.yearOfCompletion,
						},
					},
				},
			});
		}
	}

	console.log("Adding students...");
	var idxParent = 0;
	var studentUserArr: User[] = [];
	for (const [idx, student] of students.entries()) {
		const generatedPass = await bcrypt.hash(student.password, 12);

		studentUserArr.push(
			await prisma.user.create({
				data: {
					email: student.email,
					password: generatedPass,
					userType: student.userType,
					branch: {
						connect: {
							abbreviation: student.branchAbbr,
						},
					},
					student: {
						create: {
							regNo: student.regNo,
							firstName: student.firstName,
							middleName: student.middleName,
							lastName: student.lastName,
							altEmail: student.altEmail,
							dateOfBirth: student.dateOfBirth,
							phoneNumber: student.phoneNumber,
							altPhoneNumber: student.altPhoneNumber,
							father: {
								create: {
									name: parents[idxParent].name,
									phoneNumber: parents[idxParent].phoneNumber,
									occupation: parents[idxParent].occupation,
									organization: parents[idxParent].organization,
								},
							},
							mother: {
								create: {
									name: parents[idxParent + 1].name,
									phoneNumber: parents[idxParent + 1].phoneNumber,
									occupation: parents[idxParent + 1].occupation,
									organization: parents[idxParent + 1].organization,
								},
							},
							identification: {
								create: {
									aadharNumber: identifications[idx].aadharNumber,
									panNumber: identifications[idx].panNumber,
									passportNumber: identifications[idx].passportNumber,
								},
							},
							education: {
								connect: {
									id: educationArr[idx].id,
								},
							},
							height: student.height,
							weight: student.weight,
							state: student.state,
							city: student.city,
							country: student.country,
							permanentAddress: student.permanentAddress,
							currentAddress: student.currentAddress,
							skypeID: student.skypeID,
							linkedinID: student.linkedinID,
							preferredCompany: student.preferredCompany,
							physicalDisability: student.physicalDisability,
						},
					},
				},
			})
		);

		idxParent += 2;
	}

	console.log("Adding jobs...");
	var jobArr: Job[] = [];
	for (const [idx, job] of jobs.entries()) {
		jobArr.push(
			await prisma.job.create({
				data: {
					profile: job.profile,
					category: job.category,
					description: job.description,
					locations: job.locations,
					ctc: job.ctc,
					stipend: job.stipend,
					registrationStartDate: job.registrationStartDate,
					registrationDeadline: job.registrationDeadline,
					hrContact: job.hrContact,
					offerType: job.offerType,
					isSpot: job.isSpot,
					bond: job.bond,
					hasBond: job.hasBond,
					company: {
						connect: {
							id: companyArr[idx].id,
						},
					},
					eligibility: {
						create: {
							cgpa: eligibilities[idx].cgpa,
							tenthScore: eligibilities[idx].tenthScore,
							twelfthScore: eligibilities[idx].twelfthScore,
							diplomaScore: eligibilities[idx].diplomaScore,
							numberOfBacklogs: eligibilities[idx].numberOfBacklogs,
							additionalRequirement: eligibilities[idx].additionalRequirement,
							branches: {
								connect: [
									...eligibilities[idx].branchesAbrr.map(ele => ({
										abbreviation: ele,
									})),
								],
							},
						},
					},
				},
			})
		);
	}

	console.log("Adding shortlists...");
	var studentEmailToUserIDMap = new Map<string, string>();
	for (const ele of studentUserArr) {
		studentEmailToUserIDMap.set(ele.email, ele.id);
	}
	var idxSL = 0;
	for (const job in jobArr) {
		for (var idx = idxSL; idx < idxSL + 4; idx++) {
			await prisma.shortlist.create({
				data: {
					step: shortlists[idx].step,
					job: {
						connect: {
							id: jobArr[job].id,
						},
					},
					students: {
						connect: [
							...shortlists[idx].studentsEmail.map(email => ({
								userID: studentEmailToUserIDMap.get(email),
							})),
						],
					},
				},
			});
		}

		idxSL += 4;
	}

	console.log("Adding company preferences...");
	companyArr.sort((a, b) => a.name.localeCompare(b.name));
	var idxPref = 0;
	for (const company of companyArr) {
		for (var idx = idxPref; idx < idxPref + 4; idx++) {
			console.log(company.name);
			await prisma.companyPreference.create({
				data: {
					preference: companyPreferences[idx].preference,
					company: {
						connect: {
							id: company.id,
						},
					},
					student: {
						connect: {
							userID: studentEmailToUserIDMap.get(companyPreferences[idx].studentEmail),
						},
					},
				},
			});
		}
		idxPref += 4;
	}
}

seed()
	.catch(err => {
		console.log(err);
	})
	.finally(() => {
		prisma.$disconnect();
	});
