import {
	Branch,
	Parent,
	Identification,
	Academics,
	Semester,
	Education,
	Company,
	CompanyPreference,
	User,
	Student,
	Eligibility,
	Job,
	Shortlist,
} from "../src/types/graphql";

export const branches: Omit<Branch, "id">[] = [
	{
		name: "Information Technology",
		abbreviation: "IT",
	},
	{
		name: "Computer and Communication Engineering",
		abbreviation: "CCE",
	},
	{
		name: "Computer Science and Engineering",
		abbreviation: "CSE",
	},
	{
		name: "Electronics and Communication Engineering",
		abbreviation: "ECE",
	},
];

export const parents: Omit<Parent, "id">[] = [
	{
		name: "John Doe",
		occupation: "Home Maker",
		phoneNumber: "6558489135",
	},
	{
		name: "Jane Doe",
		occupation: "HR Manager",
		organization: "ABC Company",
		phoneNumber: "0123456789",
	},
	{
		name: "Harry Almeida",
		occupation: "Self Employed",
		phoneNumber: "8645127395",
	},
	{
		name: "Sally Almeida",
		occupation: "Craftsman",
		organization: "PepperFry",
		phoneNumber: "1547658235",
	},
	{
		name: "Ram Hejmadi",
		occupation: "Busniess Analyst",
		organization: "XYZ Company",
		phoneNumber: "9865328745",
	},
	{
		name: "Shika Hejmadi",
		occupation: "Professor",
		organization: "MIT",
		phoneNumber: "9657132546",
	},
	{
		name: "Rajesh Agarwal",
		occupation: "Chef",
		organization: "Taj",
		phoneNumber: "2645835795",
	},
	{
		name: "Swathi Agarwal",
		occupation: "Data Scientist",
		organization: "Google",
		phoneNumber: "7465823469",
	},
];

export const identifications: Omit<Identification, "id">[] = [
	{
		aadharNumber: "5421215454",
		panNumber: "5421215454",
		passportNumber: "5421215454",
	},
	{
		aadharNumber: "2657878454",
		panNumber: "2657878454",
		passportNumber: "2657878454",
	},
	{
		aadharNumber: "6598794945",
		panNumber: "6598794945",
		passportNumber: "6598794945",
	},
	{
		aadharNumber: "777777777",
		panNumber: "777777777",
		passportNumber: "777777777",
	},
];

export const tenth: Omit<Academics, "id">[] = [
	{
		board: "CBSE",
		country: "India",
		school: "ABC School",
		score: 8.5,
		yearOfCompletion: "2017",
	},
	{
		board: "Karnataka Board",
		country: "India",
		school: "XYZ School",
		score: 97,
		yearOfCompletion: "2018",
	},
	{
		board: "ICSE",
		country: "UAE",
		school: "LMN School",
		score: 9.5,
		yearOfCompletion: "2016",
	},
	{
		board: "CBSE",
		country: "UAE",
		school: "WDI School",
		score: 9.5,
		yearOfCompletion: "2016",
	},
];

export const twefthOrDiplomas: Omit<Academics, "id">[] = [
	{
		board: "Maharashtra Board",
		country: "India",
		school: "WER School",
		score: 90,
		yearOfCompletion: "2019",
	},
	{
		board: "Karnataka Board",
		country: "India",
		school: "YUT School",
		score: 87,
		yearOfCompletion: "2020",
	},
	{
		board: "CBSE",
		country: "India",
		school: "YDS School",
		score: 8,
		yearOfCompletion: "2018",
	},
	{
		board: "CBSE",
		country: "India",
		school: "ERW School",
		score: 8,
		yearOfCompletion: "2018",
	},
];

export const semesters: Omit<Semester, "id">[] = [
	{
		name: "Semester 1",
		gpa: 8.5,
		credits: 20,
		backlogs: 0,
		dateChanges: 0,
	},
	{
		name: "Semester 2",
		gpa: 9.5,
		credits: 25,
		backlogs: 0,
		dateChanges: 0,
	},
	{
		name: "Semester 1",
		gpa: 8,
		credits: 24,
		backlogs: 0,
		dateChanges: 0,
	},
	{
		name: "Semester 2",
		gpa: 9,
		credits: 20,
		backlogs: 0,
		dateChanges: 0,
	},
	{
		name: "Semester 1",
		gpa: 6,
		credits: 22,
		backlogs: 1,
		dateChanges: 1,
	},
	{
		name: "Semester 2",
		gpa: 7,
		credits: 25,
		backlogs: 0,
		dateChanges: 0,
	},
	{
		name: "Semester 1",
		gpa: 8,
		credits: 24,
		backlogs: 0,
		dateChanges: 0,
	},
	{
		name: "Semester 2",
		gpa: 9.8,
		credits: 23,
		backlogs: 0,
		dateChanges: 0,
	},
];

export const educations: Omit<Education, "id" | "semesters" | "tenth" | "twefth" | "diploma">[] = [
	{
		jeeMainRank: "1000011",
		jeeAdvancedRank: "100022",
		metRank: "1033",
	},
	{
		jeeMainRank: "22000022",
		jeeAdvancedRank: "200022",
		metRank: "2022",
	},
	{
		jeeMainRank: "3000333",
		jeeAdvancedRank: "30003",
		metRank: "3033",
	},
	{
		jeeMainRank: "40004444",
		jeeAdvancedRank: "40004",
		metRank: "4044",
	},
];

export const companies: Omit<Company, "id">[] = [
	{
		name: "Google",
		abbreviation: "GOOG",
		aboutCompany: "Google is OG",
		logo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FGoogle_2015_logo.svg%2F368px-Google_2015_logo.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGoogle_logo&tbnid=A0NenI6HBdTXjM&vet=12ahUKEwj7yO70j_T0AhWEgmMGHV07CRMQMygAegUIARDPAQ..i&docid=YYcJ4Dx_qJL9iM&w=368&h=124&itg=1&q=google%20logo&ved=2ahUKEwj7yO70j_T0AhWEgmMGHV07CRMQMygAegUIARDPAQ",
	},
	{
		name: "Microsoft",
		abbreviation: "MSFT",
		aboutCompany: "Microsoft is a company",
		logo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F0pAzN6LdawcEO1pxZXy-78_VgVU%3D%2F7x0%3A633x417%2F1400x1050%2Ffilters%3Afocal(7x0%3A633x417)%3Aformat(jpeg)%2Fcdn.vox-cdn.com%2Fassets%2F1311169%2Fmslogo.jpg&imgrefurl=https%3A%2F%2Fwww.theverge.com%2F2012%2F8%2F23%2F3262517%2Fmicrosoft-new-logo&tbnid=dfaxIolwQPwMWM&vet=12ahUKEwiurZankPT0AhWR-TgGHbqxB3EQMygEegUIARDZAQ..i&docid=xRwopGKzKdin0M&w=1400&h=1050&itg=1&q=microsoft%20logo&ved=2ahUKEwiurZankPT0AhWR-TgGHbqxB3EQMygEegUIARDZAQ",
	},
	{
		name: "Amazon",
		abbreviation: "AMZN",
		aboutCompany: "Owns the world",
		logo: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fmedia.corporate-ir.net%2Fmedia_files%2FIROL%2F17%2F176060%2FOct18%2FAmazon%2520logo.PNG&imgrefurl=https%3A%2F%2Fpress.aboutamazon.com%2Fimages-videos%2F&tbnid=XEJ1Bo66DeGrHM&vet=12ahUKEwjdobHHkPT0AhV5xKACHdE4BFoQMygAegUIARDPAQ..i&docid=2LaeyZMrOCvsfM&w=3216&h=1352&itg=1&q=amazon%20logo&ved=2ahUKEwjdobHHkPT0AhV5xKACHdE4BFoQMygAegUIARDPAQ",
	},
	{
		name: "Facebook",
		abbreviation: "FB",
		aboutCompany: "Facebook has all your data :(",
		logo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fkernel.sr%2Fwp-content%2Fuploads%2F2020%2F06%2Ffacebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art.png&imgrefurl=https%3A%2F%2Fkernel.sr%2Ffacebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art%2F&tbnid=yyODOQ_s2NGeJM&vet=12ahUKEwjR89TekPT0AhVv-zgGHaSWDAwQMygTegUIARD7AQ..i&docid=cpkkZEv3XQZBDM&w=910&h=512&itg=1&q=facebook%20logo&ved=2ahUKEwjR89TekPT0AhVv-zgGHaSWDAwQMygTegUIARD7AQ",
	},
];

export const companyPreferences: Omit<CompanyPreference, "id">[] = [
	{
		company: "Google",
		preference: 1,
	},
	{
		company: "Microsoft",
		preference: 2,
	},
	{
		company: "Amazon",
		preference: 3,
	},
	{
		company: "Facebook",
		preference: 4,
	},
	{
		company: "Google",
		preference: 2,
	},
	{
		company: "Microsoft",
		preference: 4,
	},
	{
		company: "Amazon",
		preference: 1,
	},
	{
		company: "Facebook",
		preference: 2,
	},
	{
		company: "Google",
		preference: 1,
	},
	{
		company: "Microsoft",
		preference: 4,
	},
	{
		company: "Amazon",
		preference: 3,
	},
	{
		company: "Facebook",
		preference: 2,
	},
	{
		company: "Google",
		preference: 4,
	},
	{
		company: "Microsoft",
		preference: 3,
	},
	{
		company: "Amazon",
		preference: 1,
	},
	{
		company: "Facebook",
		preference: 2,
	},
];

export const students: ((Omit<User, "id" | "branch"> & { branchAbbr: string }) &
	Omit<Student, "id" | "user" | "education" | "identification" | "companyPreferences">)[] = [
	{
		email: "johndoe@example.com",
		password: "123456",
		userType: "STUDENT",
		branchAbbr: "ECE",
		regNo: "180999999",
		firstName: "John",
		middleName: "K",
		lastName: "Doe",
		altEmail: "abcalt@example.com",
		dateOfBirth: "2000-01-01T00:00:00.000Z",
		phoneNumber: "8545123659",
		altPhoneNumber: "8545123658",
		height: "170cm",
		weight: "60kg",
		state: "Karnataka",
		city: "Bangalore",
		country: "India",
		permanentAddress: "street 1, there",
		currentAddress: "street 1, there",
		skypeID: "skype1",
		linkedinID: "linkedin1",
		preferredCompany: "GOOG",
		physicalDisability: "None",
	},
	{
		email: "nishan@example.com",
		password: "123456",
		userType: "STUDENT",
		branchAbbr: "IT",
		regNo: "180911111",
		firstName: "Nishan",
		middleName: "C",
		lastName: "D Almeida",
		altEmail: "nishanalt@example.com",
		dateOfBirth: "2000-02-02T00:00:00.000Z",
		phoneNumber: "9585645712",
		altPhoneNumber: "9585645711",
		height: "160cm",
		weight: "70kg",
		state: "Karnataka",
		city: "Bangalore",
		country: "India",
		permanentAddress: "street 2, there",
		currentAddress: "street 2, there",
		skypeID: "skype2",
		linkedinID: "linkedin2",
		preferredCompany: "AMZN",
		physicalDisability: "None",
	},
	{
		email: "karan@example.com",
		password: "123456",
		userType: "STUDENT",
		branchAbbr: "CCE",
		regNo: "180455555",
		firstName: "Karan",
		lastName: "Hejmadi",
		altEmail: "karanalt@example.com",
		dateOfBirth: "1999-03-03T00:00:00.000Z",
		phoneNumber: "5625412375",
		altPhoneNumber: "5625412374",
		height: "175cm",
		weight: "65kg",
		state: "Maharashtra",
		city: "Mumbai",
		country: "India",
		permanentAddress: "street 3, there",
		currentAddress: "street 3, there",
		skypeID: "skype3",
		linkedinID: "linkedin3",
		preferredCompany: "MSFT",
		physicalDisability: "None",
	},
	{
		email: "sarthak@example.com",
		password: "123456",
		userType: "STUDENT",
		branchAbbr: "CSE",
		regNo: "180433333",
		firstName: "Sarthak",
		lastName: "Agarwal",
		altEmail: "sarthakalt@example.com",
		dateOfBirth: "2001-04-04T00:00:00.000Z",
		phoneNumber: "5678235689",
		altPhoneNumber: "5678235688",
		height: "160cm",
		weight: "67kg",
		state: "Uttar Pradesh",
		city: "Lucknow",
		country: "India",
		permanentAddress: "street 4, there",
		currentAddress: "street 4, there",
		skypeID: "skype4",
		linkedinID: "linkedin4",
		preferredCompany: "FB",
		physicalDisability: "None",
	},
];

export const eligibilities: (Omit<Eligibility, "id" | "branches"> & {
	branchesAbrr: string[];
})[] = [
	{
		cgpa: 8.5,
		tenthScore: 85,
		twelfthScore: 85,
		diplomaScore: 85,
		numberOfBacklogs: 0,
		additionalRequirement: "None",
		branchesAbrr: ["IT", "CSE"],
	},
	{
		cgpa: 8,
		tenthScore: 80,
		twelfthScore: 80,
		diplomaScore: 80,
		numberOfBacklogs: 0,
		additionalRequirement: "Need to be patient",
		branchesAbrr: ["ECE", "CSE"],
	},
	{
		cgpa: 7.5,
		tenthScore: 7.5,
		twelfthScore: 7.5,
		diplomaScore: 7.5,
		numberOfBacklogs: 0,
		additionalRequirement: "Not needed for now",
		branchesAbrr: ["IT", "CSE", "CCE"],
	},
	{
		cgpa: 90,
		tenthScore: 90,
		twelfthScore: 90,
		diplomaScore: 90,
		numberOfBacklogs: 0,
		additionalRequirement: "Need to be a GSOC guy",
		branchesAbrr: ["CSE"],
	},
];

export const jobs: Omit<Job, "id" | "companyID" | "company" | "eligibilityID" | "eligibility">[] = [
	{
		profile: "Software Engineer",
		category: "CORE",
		description: "This is a core job",
		locations: ["Bangalore", "Mumbai"],
		ctc: 1000000,
		registrationStartDate: "2020-01-01T00:00:00.000Z",
		registrationDeadline: "2020-02-02T00:00:00.000Z",
		hrContact: "googlehr@dummygoogle.com",
		offerType: "P",
		isSpot: true,
		hasBond: false,
	},
	{
		profile: "Site Reliability Engineer",
		category: "CORE",
		description: "This is a core job",
		locations: ["Pune", "Mumbai"],
		ctc: 1500000,
		registrationStartDate: "2020-02-02T00:00:00.000Z",
		registrationDeadline: "2020-03-03T00:00:00.000Z",
		hrContact: "amazonhr@dummyamazon.com",
		offerType: "P",
		isSpot: true,
		hasBond: true,
		bond: "2 years",
	},
	{
		profile: "Software Engineer",
		category: "CORE",
		description: "This is a core job",
		locations: ["Bangalore"],
		stipend: 40000,
		registrationStartDate: "2020-03-03T00:00:00.000Z",
		registrationDeadline: "2020-04-04T00:00:00.000Z",
		hrContact: "mshr@dummyms.com",
		offerType: "I",
		isSpot: true,
		hasBond: false,
	},
	{
		profile: "Data Analyst",
		category: "ITES",
		description: "This is a ITES job",
		locations: ["PAN India"],
		stipend: 40000,
		registrationStartDate: "2020-04-04T00:00:00.000Z",
		registrationDeadline: "2020-05-05T00:00:00.000Z",
		hrContact: "fbhr@dummyfb.com",
		offerType: "I",
		isSpot: true,
		hasBond: false,
	},
];

export const shortlists: (Omit<Shortlist, "id" | "students"> & { studentsEmail: string[] })[] = [
	{
		step: "ELIGIBILITY",
		studentsEmail: ["nishan@example.com", "sarthak@example.com"],
	},
	{
		step: "ONLINE_TEST_I",
		studentsEmail: ["sarthak@example.com", "nishan@example.com"],
	},
	{
		step: "INTERVIEW",
		studentsEmail: ["nishan@example.com"],
	},
	{
		step: "SELECTED",
		studentsEmail: ["nishan@example.com"],
	},
	{
		step: "ELIGIBILITY",
		studentsEmail: ["johndoe@example.com", "sarthak@example.com"],
	},
	{
		step: "ONLINE_TEST_I",
		studentsEmail: ["johndoe@example.com", "sarthak@example.com"],
	},
	{
		step: "INTERVIEW",
		studentsEmail: ["sarthak@example.com"],
	},
	{
		step: "SELECTED",
		studentsEmail: ["sarthak@example.com"],
	},
	{
		step: "ELIGIBILITY",
		studentsEmail: ["johndoe@example.com", "karan@example.com", "sarthak@example.com"],
	},
	{
		step: "ONLINE_TEST_I",
		studentsEmail: ["karan@example.com"],
	},
	{
		step: "INTERVIEW",
		studentsEmail: ["karan@example.com"],
	},
	{
		step: "SELECTED",
		studentsEmail: [],
	},
	{
		step: "ELIGIBILITY",
		studentsEmail: ["sarthak@example.com"],
	},
	{
		step: "ONLINE_TEST_I",
		studentsEmail: ["karan@example.com"],
	},
	{
		step: "INTERVIEW",
		studentsEmail: [],
	},
	{
		step: "SELECTED",
		studentsEmail: [],
	},
];
