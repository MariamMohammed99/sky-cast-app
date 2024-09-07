export const getDaysOfLastMonth = () => {
  const today = new Date();

  const firstDayOfCurrentMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const lastMonth = new Date(firstDayOfCurrentMonth.setMonth(firstDayOfCurrentMonth.getMonth() - 1));

  const startOfLastMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1);
  const endOfLastMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0);

  return { startDate: startOfLastMonth, endDate: endOfLastMonth };
};