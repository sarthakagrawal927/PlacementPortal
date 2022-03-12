export type JobType = {
	ctc: number;
	stipend: number;
	profile: string;
	offerType: string;
	isSpot: boolean;
	locations: string[];
	category: string;
	company: {
		name: string;
		logo: string;
	};
	registrationStartDate: string;
	registrationDeadline: string;
	numberOfregistrations: number;
};
