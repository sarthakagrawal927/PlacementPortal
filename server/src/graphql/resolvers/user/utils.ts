import { CreateUserInput } from "../../../types/graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CreateUserError = {
	email: string | null;
	password: string | null;
	branchID: string | null;
	regNo: string | null;
	firstName: string | null;
	lastName: string | null;
	altEmail: string | null;
	dateOfBirth: string | null;
	phoneNumber: string | null;
	altPhoneNumber: string | null;
	height: string | null;
	weight: string | null;
	state: string | null;
	city: string | null;
	country: string | null;
	permanentAdress: string | null;
	currentAddress: string | null;
	skypeID: string | null;
	linkedinID: string | null;
	identification: string | null;
	father: string | null;
	mother: string | null;
	guardian: string | null;
	tenth: string | null;
	twefth: string | null;
	diploma: string | null;
	semesters: string | null;
};

export const validateCreateUserInput = async ({
	...createUserInput
}: CreateUserInput): Promise<{ errors: CreateUserError; isValid: boolean }> => {
	const errors: CreateUserError = {
		email: null,
		password: null,
		branchID: null,
		regNo: null,
		firstName: null,
		lastName: null,
		altEmail: null,
		dateOfBirth: null,
		phoneNumber: null,
		altPhoneNumber: null,
		height: null,
		weight: null,
		state: null,
		city: null,
		country: null,
		permanentAdress: null,
		currentAddress: null,
		skypeID: null,
		linkedinID: null,
		identification: null,
		father: null,
		mother: null,
		guardian: null,
		tenth: null,
		twefth: null,
		diploma: null,
		semesters: null,
	};

	const isPhoneNumber: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	const isEmail: RegExp = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

	if (createUserInput.email.trim() === "") {
		errors.email = "Email must not be empty";
	} else if (!createUserInput.email.match(isEmail)) errors.email = "Email must be a valid email";
	else {
		const user = await prisma.user.findUnique({
			where: {
				email: createUserInput.email,
			},
		});
		if (user) errors.email = "User with this Email already exists";
	}

	if (createUserInput.password.trim() === "") errors.password = "Password must not be empty";
	else if (createUserInput.password.length < 5) errors.password = "Password must be at least 5 characters";

	if (createUserInput.branchID.trim() === "") {
		errors.branchID = "Branch ID must not be empty";
	} else {
		const branch = await prisma.branch.findUnique({
			where: {
				id: createUserInput.branchID,
			},
		});
		if (!branch) errors.branchID = "Branch with this ID does not exist";
	}

	if (createUserInput.userType === "STUDENT") {
		if (createUserInput.student?.regNo.trim() === "") {
			errors.regNo = "Registration Number must not be empty";
		} else {
			const student = await prisma.student.findUnique({
				where: {
					regNo: createUserInput.student?.regNo,
				},
			});
			if (student) errors.regNo = "Student with this Registration Number already exists";
		}

		if (createUserInput.student?.firstName.trim() === "") errors.firstName = "First name should not be empty";
		if (createUserInput.student?.lastName.trim() === "") errors.lastName = "Last name should not be empty";

		if (createUserInput.student?.altEmail.trim() === "") errors.email = "Email must not be empty";
		else if (!createUserInput.student?.altEmail.match(isEmail))
			errors.altEmail = "Alternate Email must be a valid email";

		if (createUserInput.student?.dateOfBirth.trim() === "") errors.dateOfBirth = "Date of Birth is required";
		else {
			try {
				const date = new Date(createUserInput.student?.dateOfBirth).toISOString();
				if (date !== createUserInput.student?.dateOfBirth) {
					errors.dateOfBirth = "Date of Birth Format not accepted";
				}
			} catch {
				errors.dateOfBirth = "Date of Birth Format not accepted";
			}
		}

		if (createUserInput.student?.phoneNumber.trim() === "") errors.phoneNumber = "Phone Number is required";
		else if (!createUserInput.student?.phoneNumber.trim().match(isPhoneNumber))
			errors.phoneNumber = "Phone number not valid";
		else {
			const student = await prisma.student.findUnique({
				where: {
					phoneNumber: createUserInput.student.phoneNumber,
				},
			});
			if (student) errors.phoneNumber = "User with this Phone Number already exists";
		}

		if (createUserInput.student?.altPhoneNumber.trim() === "")
			errors.altPhoneNumber = "Alternate Phone Number is required";
		else if (!createUserInput.student?.altPhoneNumber.trim().match(isPhoneNumber))
			errors.phoneNumber = "Alternate Phone number not valid";

		if (createUserInput.student?.height.trim() === "") errors.height = "Height is required";
		if (createUserInput.student?.weight.trim() === "") errors.weight = "Weight is required";
		if (createUserInput.student?.state.trim() === "") errors.state = "State is required";
		if (createUserInput.student?.city.trim() === "") errors.city = "City is required";
		if (createUserInput.student?.country.trim() === "") errors.country = "Country is required";
		if (createUserInput.student?.permanentAddress.trim() === "")
			errors.permanentAdress = "Permanent Address is required";
		if (createUserInput.student?.currentAddress.trim() === "") errors.currentAddress = "Current Address is required";
		if (createUserInput.student?.skypeID.trim() === "") errors.skypeID = "Skype ID is required";
		if (createUserInput.student?.linkedinID.trim() === "") errors.linkedinID = "LinkedIn ID is required";

		if (createUserInput.student?.father || createUserInput.student?.mother || createUserInput.student?.guardian) {
			if (
				createUserInput.student?.father &&
				(createUserInput.student.father.name.trim() === "" || createUserInput.student.father.occupation.trim() === "")
			)
				errors.father = "Missing Father's required details";
			else if (
				createUserInput.student?.father &&
				!createUserInput.student?.father?.phoneNumber.trim().match(isPhoneNumber)
			)
				errors.father = "father Phone number not valid";

			if (
				createUserInput.student?.mother &&
				(createUserInput.student.mother.name.trim() === "" || createUserInput.student.mother.occupation.trim() === "")
			)
				errors.mother = "Missing Mother's required details";
			else if (
				createUserInput.student?.mother &&
				!createUserInput.student?.mother?.phoneNumber.trim().match(isPhoneNumber)
			)
				errors.mother = "Mother Phone number not valid";

			if (
				createUserInput.student?.guardian &&
				(createUserInput.student.guardian?.name.trim() === "" ||
					createUserInput.student.guardian?.occupation.trim() === "")
			)
				errors.guardian = "Missing Gaurdian's required details";
			else if (
				createUserInput.student?.guardian &&
				!createUserInput.student?.guardian?.phoneNumber.trim().match(isPhoneNumber)
			)
				errors.father = "Guardian Phone number not valid";
		} else {
			errors.father = "At least one parent or guardian is required";
			errors.mother = "At least one parent or guardian is required";
			errors.guardian = "At least one parent or guardian is required";
		}

		if (
			createUserInput.student?.education.tenth.board === "" ||
			createUserInput.student?.education.tenth.yearOfCompletion === "" ||
			createUserInput.student?.education.tenth.country === "" ||
			createUserInput.student?.education.tenth.school === ""
		)
			errors.tenth = "Missing Tenth level required details";
		else if (
			createUserInput.student?.education.tenth.score &&
			(createUserInput.student?.education.tenth.score < 0 || createUserInput.student.education.tenth.score > 100)
		)
			errors.tenth = "Score is invalid";

		if (
			createUserInput.student?.education.twefth === undefined &&
			createUserInput.student?.education.diploma === undefined
		) {
			errors.twefth = "At least one of twelft or diploma is required";
			errors.diploma = "At least one of twelft or diploma level is required";
		} else {
			if (
				createUserInput.student.education.twefth &&
				(createUserInput.student.education.twefth.board === "" ||
					createUserInput.student.education.twefth.yearOfCompletion === "" ||
					createUserInput.student.education.twefth.country === "" ||
					createUserInput.student.education.twefth.school === "")
			)
				errors.twefth = "Missing Twelft level required details";
			else if (
				createUserInput.student?.education.twefth?.score &&
				(createUserInput.student?.education.twefth.score < 0 || createUserInput.student.education.twefth.score > 100)
			)
				errors.twefth = "Score is invalid";

			if (
				createUserInput.student.education.diploma &&
				(createUserInput.student.education.diploma.board === "" ||
					createUserInput.student.education.diploma.yearOfCompletion === "" ||
					createUserInput.student.education.diploma.country === "" ||
					createUserInput.student.education.diploma.school === "")
			)
				errors.diploma = "Missing Diploma level required details";
			else if (
				createUserInput.student?.education.diploma?.score &&
				(createUserInput.student?.education.diploma.score < 0 || createUserInput.student.education.diploma.score > 100)
			)
				errors.diploma = "Score is invalid";
		}

		if (createUserInput.student?.education.semesters.some(semester => semester.name.trim() === ""))
			errors.semesters = "Semester name is required";
		else if (createUserInput.student?.education.semesters.some(semester => semester.gpa < 0 || semester.gpa > 10))
			errors.semesters = "GPA is invalid";
	}

	return {
		errors: errors,
		isValid: Object.values(errors).every(value => value === null),
	};
};
