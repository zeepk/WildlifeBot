import { CritterType, months } from './constants.js';

export const startsWith = (message, stringToSearch) =>
	message.indexOf(stringToSearch) === 0;

export const formatCritterResponse = (data, critterType) => {
	const name = data['name']['name-USen'].replace(
		/(?:^|\s|["'([{])+\S/g,
		(match) => match.toUpperCase(),
	);
	const iconUri = data['icon_uri'];
	const availability = data['availability'];
	const time = availability['isAllDay']
		? 'Can be found all Day'
		: `Time: ${availability['time']}`;
	const location = `Location: ${availability['location']}`;
	const rarity = `Rarity: ${availability['rarity']}`;
	const speed = `Speed: ${data['speed']}`;
	const shadow = `Shadow size: ${data['shadow']}`;

	let monthsText = 'Can be found all year long';
	if (!availability['isAllYear']) {
		const northMonths = availability['month-northern'].split('-');
		const startMonthNorthern = months[Number(northMonths[0]) - 1];
		const endMonthNorthern = months[Number(northMonths[1]) - 1];

		const southMonths = availability['month-southern'].split('-');
		const startMonthSouthern = months[Number(southMonths[0]) - 1];
		const endMonthSouthern = months[Number(southMonths[1]) - 1];

		monthsText = `${startMonthNorthern}-${endMonthNorthern} (northern hemisphere)\n${startMonthSouthern}-${endMonthSouthern} (southern hemisphere)`;
	}

	let creatureData =
		critterType === CritterType.SEA ? `\n${speed}` : `\n${location}\n${rarity}`;
	if (critterType !== CritterType.BUGS) {
		creatureData += `\n${shadow}`;
	}

	const response = `${name}\n${monthsText}\n${time}${creatureData}\n${iconUri}`;

	return response;
};

export const formatVillagerResponse = (data) => {
	const name = data['name']['name-USen'].replace(
		/(?:^|\s|["'([{])+\S/g,
		(match) => match.toUpperCase(),
	);
	const imageUri = data['image_uri'];
	const saying = data['saying'];
	const birthday = `Birthday: ${data['birthday-string']}`;
	const species = `Species: ${data['species']}`;
	const personality = `Personality: ${data['personality']}`;
	const gender = `Gender: ${data['gender']}`;

	const response = `${name}\n*"${saying}"*\n${gender}\n${species}\n${personality}\n${birthday}\n${imageUri}`;

	return response;
};
