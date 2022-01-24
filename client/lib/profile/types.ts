interface Parent {
	name: string;
	mobileNumber: string;
	occupation: string;
	organization: string;
}

export interface Student {
	dateOfBirth: string;
	gender: string;
	caste: string;
	height: string;
	weight: string;
	learnerID: string;
	emailID: string;
	altEmailID: string;
	linkedInID: string;
	mobileNumber: string;
	altMobileNumber: string;
	skypeID: string;
	physicalDisability: string;
	father: Parent;
	mother: Parent;
	passportNumber?: string;
	aadharNumber: string;
	panNumber?: string;
	city: string;
	state: string;
	country: string;
	permanentAddress: string;
	currentAddress: string;
}

type EntranceTest = {
	jeeMainsRank?: string;
	jeeAdvancedRank?: string;
	metRank?: string;
};

type SchoolDetails = {
	percentage: number;
	school: string;
	board: string;
	yearOfCompletion: string;
	country: string;
};

export type FormInput = {
	personalDetails: Omit<Student, "learnerID" | "emailID">;
	academicDetails: {
		entranceTest: EntranceTest;
		tenth: SchoolDetails;
		twelfth?: SchoolDetails;
		diploma?: SchoolDetails;
	};
};
