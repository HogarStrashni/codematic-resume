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

export const getDuration = (startDate: string, endDate: string | null) => {
  const start = new Date(startDate);
  const end = new Date(endDate ?? Date.now());
  const diffDays = Math.abs((end.getTime() - start.getTime()) / 86400000);

  const years = Math.floor(diffDays / 365);
  const months = Math.round((diffDays % 365) / 30);

  if (years === 0) {
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  }

  if (months === 12) {
    return `${years + 1} ${years === 0 ? 'year' : 'years'}, 0 months`;
  }

  return `${years} ${years === 1 ? 'year' : 'years'}, ${months} ${months === 1 ? 'month' : 'months'}`;
};
