export const convertDate = (dateString: string, includeYear: boolean = false): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
  };

  if (includeYear) {
    options.year = 'numeric';
  }

  return new Intl.DateTimeFormat('en-US', options).format(date);
};