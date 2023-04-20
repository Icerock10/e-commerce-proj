export function getTodayDate(): string {
	const now = new Date();
	const options: Intl.DateTimeFormatOptions = {
	  weekday: "long",
	  month: "long",
	  day: "2-digit",
	  year: "numeric",
	  timeZone: "GMT",
	};
	const formatter = new Intl.DateTimeFormat("en-US", options);
	return formatter.format(now);
 }