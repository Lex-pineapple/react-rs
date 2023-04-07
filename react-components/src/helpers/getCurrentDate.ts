export function getCurrentDate() {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  return `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`;
}
