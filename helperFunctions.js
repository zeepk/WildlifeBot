export const startsWith = (message, stringToSearch) =>
	message.indexOf(stringToSearch) === 0;

export const formatCritterResponse = (data) => {
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

	let monthsText = 'Can be found all year long';
	if (!availability['isAllYear']) {
		monthsText = `Months: ${availability['month-northern']} (northern hemisphere)\nMonths: ${availability['month-southern']} (southern hemisphere)`;
	}

	const response = `${name}\n${monthsText}\n${time}\n${location}\n${rarity}\n${iconUri}`;

	return response;
};
