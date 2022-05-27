// Reordering an array
export const reorder = <T extends string>(
  array: T[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(array);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
