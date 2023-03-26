/**
 *
 * @param 2023-03-26T22:00:00
 * @returns 2023/3/26 22:00:00
 */

export const convertTimeForDisplay = (rowDatetime: string) => {
  const datetime = new Date(rowDatetime);
  if (Number.isNaN(datetime.valueOf())) return;
  return datetime.toLocaleString();
};
