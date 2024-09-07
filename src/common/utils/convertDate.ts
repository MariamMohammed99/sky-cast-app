export const convertDate = (dateString: string, includeYear: boolean = false): string => {
  const date = new Date(dateString);

  if (includeYear) {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  } else {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
};
