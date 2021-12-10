interface BadgeColorType {
	lightGreen: string;
	darkGreen: string;
	lightRed: string;
	darkRed: string;
	lightBlue: string;
	darkBlue: string;
	lightPurple: string;
	darkPurple: string;
	lightOrange: string;
	darkOrange: string;
}

interface BadgeColorReturnType {
	textColor: string;
	backgroundColor: string;
}

function getBadgeColor(badgeColors: BadgeColorType, badgeType: string): BadgeColorReturnType {
	let badgeColor = {
		textColor: "",
		backgroundColor: "",
	};
	switch (badgeType) {
		case "PENDING":
			badgeColor.textColor = badgeColors.darkBlue;
			badgeColor.backgroundColor = badgeColors.lightBlue;
			break;
		case "OPEN":
			badgeColor.textColor = badgeColors.darkGreen;
			badgeColor.backgroundColor = badgeColors.lightGreen;
			break;
		case "APPLIED":
			badgeColor.textColor = badgeColors.darkGreen;
			badgeColor.backgroundColor = badgeColors.lightGreen;
			break;
		case "CLOSED":
			badgeColor.textColor = badgeColors.darkRed;
			badgeColor.backgroundColor = badgeColors.lightRed;
			break;
		case "INTERVIEWS":
			badgeColor.textColor = badgeColors.darkPurple;
			badgeColor.backgroundColor = badgeColors.lightPurple;
			break;
		case "ONLINE TEST":
			badgeColor.textColor = badgeColors.darkOrange;
			badgeColor.backgroundColor = badgeColors.lightOrange;
			break;
		default:
			break;
	}
	return badgeColor;
}

export default getBadgeColor;
