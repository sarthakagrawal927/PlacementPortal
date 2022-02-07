import { gql } from "apollo-server";

const typeDefs = gql`
	scalar DateTime

	enum UserType {
		STUDENT
		DEPARTMENT
		PLACEMENT
	}

	enum Step {
		ELIGIBILITY
		REGISTRATION
		ONLINE_TEST_I
		ONLINE_TEST_II
		INTERVIEW
		SELECTED
	}

	enum Category {
		CORE
		ITES
	}

	enum OfferType {
		P
		I
		P_PLUS_I
	}

	type Branch {
		id: String!
		name: String!
		abbreviation: String!

		createdAt: DateTime
		updatedAt: DateTime
	}

	type User {
		id: String!
		email: String!
		userType: UserType!
		branch: Branch!

		createdAt: DateTime
		updatedAt: DateTime
	}

	type Parent {
		id: String!
		name: String!
		phoneNumber: String!
		occupation: String!
		organization: String

		createdAt: DateTime
		updatedAt: DateTime
	}

	type Identification {
		id: String!
		aadharNumber: String
		panNumber: String
		passportNumber: String

		createdAt: DateTime
		updatedAt: DateTime
	}

	type Academics {
		id: String!
		score: Float!
		school: String!
		yearOfCompletion: String!
		country: String!
		board: String!

		createdAt: DateTime
		updatedAt: DateTime
	}

	type Semester {
		id: String!
		name: String!
		gpa: Float!
		credits: Int!
		backlogs: Int!
		dateChanges: Int!

		createdAt: DateTime
		updatedAt: DateTime
	}

	type Education {
		id: String!
		tenth: Academics!
		twefth: Academics
		diploma: Academics
		jeeMainRank: String
		jeeAdvancedRank: String
		metRank: String
		semesters: [Semester]!

		createdAt: DateTime
		updatedAt: DateTime
	}

	type Shortlist {
		id: String!
		step: Step!
		students: [Student]!

		createdAt: DateTime
		updatedAt: DateTime
	}

	type Eligibility {
		id: String!
		cgpa: Float
		tenthScore: Float
		twelfthScore: Float
		diplomaScore: Float
		numberOfBacklogs: Int
		additionalRequirement: String
		branches: [Branch]!

		createdAt: DateTime
		updatedAt: DateTime
	}

	type Job {
		id: String!
		company: Company!
		profile: String!
		category: Category!
		description: String!
		locations: [String!]!
		ctc: Int
		stipend: Int
		registrationStartDate: DateTime!
		registrationDeadline: DateTime!
		hrContact: String!
		offerType: OfferType!
		isSpot: Boolean!
		bond: String
		hasBond: Boolean!
		shorlists: [Shortlist]
		eligibility: Eligibility!

		createdAt: DateTime
		updatedAt: DateTime
	}


	type Company {
		id: String!
		name: String!
		logo: String
		aboutCompany: String
		feedback: String
		jobs: [Job]

		createdAt: DateTime
		updatedAt: DateTime
	}

	type CompanyPreference {
		id: String!
		company: Company!
		preference: Int!

		createdAt: DateTime
		updatedAt: DateTime
	}

	type Student {
		user: User!
		regNo: String!
		firstName: String!
		middleName: String
		lastName: String!
		altEmail: String!
		dateOfBirth: DateTime!
		phoneNumber: String!
		altPhoneNumber: String!
		height: String!
		weight: String!
		father: Parent
		mother: Parent
		guardian: Parent
		state: String!
		city: String!
		country: String!
		permanentAddress: String!
		currentAddress: String!
		identification: Identification!
		education: Education!
		skypeID: String!
		linkedinID: String!
		preferredCompany: String
		companyPreferences: [CompanyPreference]
		currentOffers: [Job]
		shortlists: [Shortlist]
		physicalDisability: String

		createdAt: DateTime
		updatedAt: DateTime
	}
	type JobsDashboard {
		id: String!
		company: Company!
		profile: String!
		category: Category!
		locations: [String!]!
		ctc: Int
		stipend: Int 
		registrationStartDate: DateTime!
		registrationDeadline: DateTime!
		offerType: OfferType!
		isSpot: Boolean!
		createdAt: DateTime
		updatedAt: DateTime
	}

	type Query {
		getAllJobs: [JobsDashboard]!
		getJobDetails(jobID: String!):Job
	}

	input EligibilityInput {
		cgpa: Float
		tenthScore: Float
		twelfthScore: Float
		diplomaScore: Float
		numberOfBacklogs: Int
		additionalRequirement: String
		branchIDs: [String!]!
	}

	input CreateNewJobInput {
		companyID: String!
		profile: String!
		category: Category!
		description: String!
		locations: [String!]!
		ctc: Int
		stipend: Int
		registrationStartDate: DateTime!
		registrationDeadline: DateTime!
		hrContact: String!
		offerType: OfferType!
		isSpot: Boolean!
		bond: String
		hasBond: Boolean!
		eligibility: EligibilityInput!
	}

	input ParentInput {
		name: String!
		phoneNumber: String!
		occupation: String!
		organization: String
	}

	input AcademicsInput {
		score: Float!
		school: String!
		yearOfCompletion: String!
		country: String!
		board: String!
	}

	input SemesterInput {
		name: String!
		gpa: Float!
		credits: Int!
		backlogs: Int!
		dateChanges: Int!
	}

	input EducationInput {
		tenth: AcademicsInput!
		twefth: AcademicsInput
		diploma: AcademicsInput
		jeeMainRank: String
		jeeAdvancedRank: String
		metRank: String
		semesters: [SemesterInput!]!
	}

	input IdentificationInput {
		aadharNumber: String
		panNumber: String
		passportNumber: String
	}

	input StudentInput {
		regNo: String!
		firstName: String!
		middleName: String
		lastName: String!
		altEmail: String!
		dateOfBirth: DateTime!
		phoneNumber: String!
		altPhoneNumber: String!
		height: String!
		weight: String!
		father: ParentInput
		mother: ParentInput
		guardian: ParentInput
		state: String!
		city: String!
		country: String!
		permanentAddress: String!
		currentAddress: String!
		identification: IdentificationInput!
		education: EducationInput!
		skypeID: String!
		linkedinID: String!
		physicalDisability: String
	}

	input CreateUserInput {
		email: String!
		password: String!
		userType: UserType!
		branchID: String!
		student: StudentInput
	}

	input EligibilityUpdateInput {
		cgpa: Float
		tenthScore: Float
		twelfthScore: Float
		diplomaScore: Float
		numberOfBacklogs: Int
		additionalRequirement: String
		branchIDs: [String!]
	}

	input UpdateJobInput {
		jobID: String!
		profile: String
		category: Category
		description: String
		locations: [String!]
		ctc: Int
		stipend: Int
		registrationStartDate: DateTime
		registrationDeadline: DateTime
		hrContact: String
		offerType: OfferType
		isSpot: Boolean
		bond: String
		hasBond: Boolean
		eligibility: EligibilityUpdateInput
	}

	type Mutation {
		createNewJob(createNewJobInput: CreateNewJobInput!): Job!
		createUser(createUserInput: CreateUserInput!): User!

		updateJob(updateJobInput: UpdateJobInput!): Job!

		deleteJob(jobID: String!): Job!
	}
`;

export default typeDefs;
