const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];

export const formatDate = (date: string) => {
  const month = months[new Date(date).getMonth()];
  const year = new Date(date).getFullYear();

  return `${month} ${year}`;
};

const formatUnit = (value: number, unit: string) => `${value} ${unit}${value === 1 ? '' : 's'}`;

export const getDuration = (startDate: string, endDate: string | null) => {
  const start = new Date(startDate);
  const end = new Date(endDate ?? Date.now());

  if (start > end) throw new Error('Error starting or ending job date');

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  const days = end.getDate() - start.getDate();

  if (days > 7) {
    months += 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years === 0) return formatUnit(months, 'month');
  if (months === 0) return formatUnit(years, 'year');

  return `${formatUnit(years, 'year')}, ${formatUnit(months, 'month')}`;
};
