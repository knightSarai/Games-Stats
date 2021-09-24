export function dateStringToDate(dateString: string): Date {
  const date = dateString.split('/').map((elem) => parseInt(elem));
  return new Date(date[2], date[1] - 1, date[0]);
}
