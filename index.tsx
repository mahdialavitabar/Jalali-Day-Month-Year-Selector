export const jalaliMonths = [
	{ value: "فروردین", label: "فروردین", unavailable: false },
	{ value: "اردیبهشت", label: "اردیبهشت", unavailable: false },
	{ value: "خرداد", label: "خرداد", unavailable: false },
	{ value: "تیر", label: "تیر", unavailable: false },
	{ value: "مرداد", label: "مرداد", unavailable: false },
	{ value: "شهریور", label: "شهریور", unavailable: false },
	{ value: "مهر", label: "مهر", unavailable: false },
	{ value: "آبان", label: "آبان", unavailable: false },
	{ value: "آذر", label: "آذر", unavailable: false },
	{ value: "دی", label: "دی", unavailable: false },
	{ value: "بهمن", label: "بهمن", unavailable: false },
	{ value: "اسفند", label: "اسفند", unavailable: false },
];
// Persian numerals
const persianNumerals = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

// Convert a number to a string with Persian numerals
function toPersianNumber(number: number): string {
	return number.toString().replace(/[0-9]/g, (char: string) => persianNumerals[parseInt(char)]);
}

// Get current date in Jalali calendar
const currentDate = new Date();
const gregorianYear = currentDate.getFullYear();
const gregorianMonth = currentDate.getMonth();
const gregorianDay = currentDate.getDate();

// Convert to Jalali calendar
const jalaliYear = gregorianYear - 621;
let jalaliMonth = 0;
let jalaliDay = gregorianDay;

// Find the number of days in the current Jalali month
const daysInMonth = 31;
while (jalaliDay > daysInMonth) {
	jalaliMonth++;
	jalaliDay -= daysInMonth;
}

// Create array of options for the day select field
export const jalaliDates: { value: number; label: string; unavailable: boolean }[] = [];
for (let i = 1; i <= daysInMonth; i++) {
	jalaliDates.push({ value: i, label: toPersianNumber(i), unavailable: false });
}
// Create array of options for the year select field
export const jalaliYears: { value: number; label: string; unavailable: boolean }[] = [];
for (let i = 1300; i <= 1401; i++) {
	jalaliYears.push({ value: i, label: toPersianNumber(i), unavailable: false });
}
// Set default value for the day select field
export const defaultDay = 29;
