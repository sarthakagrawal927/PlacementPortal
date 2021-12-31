export const company = {
	name: "Microsoft",
	logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
	hrDetails: "Justin, justindoe@gmail.com, 9876543102",
	ctc: "43",
	stipend: "80",
	profile: "Software Engineering",
	offerType: "P+I",
	bond: "1year/1lakh",
	isSpot: true,
	locations: ["Bengaluru", "Hyderabad", "Noida"],
	tenthScore: "75",
	twelfthScore: "75",
	diplomaScore: "75",
	CGPA: "7",
	numberOfBacklogs: "0",
	branches: ["CCE", "CSE", "IT", "ECE", "EEE"],
	additionalRequirements: "Should have completed GSoC",
	jobDescription:
		"You will learn and apply new skills during your internship through of online classroom sessions, assignments, tests and project: \n1.     Amazon Web Services (AWS) \n2.     HTML/CSS/React (frontend) \n3.     Java/Spring (backend) \n4.     Enterprise-class software development \n5.     Working directly with executives and customers.",
};

export const shortlist = new Map<string, { shortlisted: number; eligible: number }>();
shortlist.set("REGISTRATION", {
	shortlisted: 300,
	eligible: 857,
});
shortlist.set("ONLINE TEST", {
	shortlisted: 120,
	eligible: 267,
});

export const steps = ["REGISTRATION", "ONLINE TEST", "INTERVIEW", "SELECTED"];
