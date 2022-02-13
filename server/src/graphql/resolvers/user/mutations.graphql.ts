import { ApolloContext } from "../../../context";
import { MutationResolvers, User, StudentReturn, Student } from "../../../types/graphql";
import bcrypt from "bcryptjs";
import { validateCreateUserInput, validateLoginInput, generateToken } from "./utils";
import { UserInputError } from "apollo-server";

export const mutations: MutationResolvers<ApolloContext, User> = {
	async createUser(_, { createUserInput }, { prisma }: ApolloContext) {
		const { errors, isValid } = await validateCreateUserInput({
			...createUserInput,
		});
		if (!isValid) {
			throw new UserInputError(Object.values(errors).find(error => error !== null) ?? "", { errors });
		}

		const generatedPassword = await bcrypt.hash(createUserInput.password, 12);
		const user: User = await prisma.user.create({
			data: {
				email: createUserInput.email,
				password: generatedPassword,
				userType: createUserInput.userType,
				branch: {
					connect: { id: createUserInput.branchID },
				},
			},
			select: { id: true, email: true, userType: true, branch: true },
		});

		if (createUserInput.userType === "STUDENT") {
			await prisma.student.create({
				data: {
					regNo: createUserInput.student?.regNo ?? "",
					firstName: createUserInput.student?.firstName ?? "",
					middleName: createUserInput.student?.firstName,
					lastName: createUserInput.student?.lastName ?? "",
					altEmail: createUserInput.student?.altEmail ?? "",
					dateOfBirth: createUserInput.student?.dateOfBirth,
					phoneNumber: createUserInput.student?.phoneNumber ?? "",
					altPhoneNumber: createUserInput.student?.altPhoneNumber ?? "",
					height: createUserInput.student?.height ?? "",
					weight: createUserInput.student?.weight ?? "",
					state: createUserInput.student?.state ?? "",
					city: createUserInput.student?.city ?? "",
					country: createUserInput.student?.country ?? "",
					permanentAddress: createUserInput.student?.permanentAddress ?? "",
					currentAddress: createUserInput.student?.currentAddress ?? "",
					skypeID: createUserInput.student?.skypeID ?? "",
					linkedinID: createUserInput.student?.linkedinID ?? "",
					physicalDisability: createUserInput.student?.physicalDisability,
					father: createUserInput.student?.father
						? {
								create: {
									name: createUserInput.student?.father?.name ?? "",
									phoneNumber: createUserInput.student?.father?.phoneNumber ?? "",
									occupation: createUserInput.student?.father?.occupation ?? "",
									organization: createUserInput.student?.father?.organization ?? "",
								},
						  }
						: undefined,
					mother: createUserInput.student?.mother
						? {
								create: {
									name: createUserInput.student?.mother?.name ?? "",
									phoneNumber: createUserInput.student?.mother?.phoneNumber ?? "",
									occupation: createUserInput.student?.mother?.occupation ?? "",
									organization: createUserInput.student?.mother?.organization ?? "",
								},
						  }
						: undefined,
					guardian: createUserInput.student?.guardian
						? {
								create: {
									name: createUserInput.student?.guardian?.name ?? "",
									phoneNumber: createUserInput.student?.guardian?.phoneNumber ?? "",
									occupation: createUserInput.student?.guardian?.occupation ?? "",
									organization: createUserInput.student?.guardian?.organization ?? "",
								},
						  }
						: undefined,
					identification: {
						create: {
							aadharNumber: createUserInput.student?.identification?.aadharNumber ?? "",
							panNumber: createUserInput.student?.identification?.panNumber ?? "",
							passportNumber: createUserInput.student?.identification?.passportNumber ?? "",
						},
					},
					education: {
						create: {
							jeeMainRank: createUserInput.student?.education?.jeeMainRank,
							jeeAdvancedRank: createUserInput.student?.education?.jeeAdvancedRank,
							metRank: createUserInput.student?.education?.metRank,
							tenth: {
								create: {
									score: createUserInput.student?.education?.tenth?.score ?? 0,
									school: createUserInput.student?.education?.tenth?.school ?? "",
									yearOfCompletion: createUserInput.student?.education?.tenth?.yearOfCompletion ?? "",
									country: createUserInput.student?.education?.tenth?.country ?? "",
									board: createUserInput.student?.education?.tenth?.board ?? "",
								},
							},
							twelfth: createUserInput.student?.education.twefth
								? {
										create: {
											score: createUserInput.student?.education?.twefth?.score ?? 0,
											school: createUserInput.student?.education?.twefth?.school ?? "",
											yearOfCompletion: createUserInput.student?.education?.twefth?.yearOfCompletion ?? "",
											country: createUserInput.student?.education?.twefth?.country ?? "",
											board: createUserInput.student?.education?.twefth?.board ?? "",
										},
								  }
								: undefined,
							diploma: createUserInput.student?.education.diploma
								? {
										create: {
											score: createUserInput.student?.education?.diploma?.score ?? 0,
											school: createUserInput.student?.education?.diploma?.school ?? "",
											yearOfCompletion: createUserInput.student?.education?.diploma?.yearOfCompletion ?? "",
											country: createUserInput.student?.education?.diploma?.country ?? "",
											board: createUserInput.student?.education?.diploma?.board ?? "",
										},
								  }
								: undefined,
							semesters: {
								createMany: {
									data: createUserInput.student?.education.semesters.length
										? [...createUserInput.student?.education.semesters]
										: [],
								},
							},
						},
					},
					user: {
						connect: {
							id: user.id,
						},
					},
				},
			});
		}

		return user;
	},

	async loginUser(_, { loginInput }, { prisma }: ApolloContext) {
		const { errors, isValid } = await validateLoginInput(loginInput);
		if (!isValid) {
			throw new UserInputError(Object.values(errors).find(error => error !== null) ?? "", { errors });
		}

		const user: (User & { student: Omit<Student, "identification" | "education" | "user"> | null }) | null =
			await prisma.user.findUnique({
				where: {
					email: loginInput.email,
				},
				select: {
					id: true,
					email: true,
					password: true,
					branch: true,
					userType: true,
					student: true,
				},
			});

		const token = generateToken({
			email: user?.email!,
			id: user?.id!,
			userType: user?.userType!,
		});

		var student: StudentReturn | null = null;
		if (user?.userType === "STUDENT") {
			student = {
				regNo: user.student?.regNo!,
				firstName: user.student?.firstName!,
				middleName: user.student?.middleName!,
				lastName: user.student?.lastName!,
				dateOfBirth: user.student?.dateOfBirth!,
				phoneNumber: user.student?.phoneNumber!,
			};
		}

		return {
			id: user?.id!,
			email: user?.email!,
			branch: user?.branch!,
			userType: user?.userType!,
			token: token,
			student: student,
			createdAt: user?.createdAt,
			updatedAt: user?.createdAt,
		};
	},
};
