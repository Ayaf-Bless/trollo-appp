type Item = {
  id: string;
};

export const findItemIndexById = <T extends Item>(item: T[], id: string) => {
  return item.findIndex((item: T) => item.id === id);
};

export const removeItemAtIndex = <T>(array: T[], index: number) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const insertIndexAtIndex = <T>(array: T[], item: T, index: number) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

export const moveItem = <T>(array: T[], from: number, to: number) => {
  const item = array[from];

  return insertIndexAtIndex(removeItemAtIndex(array, from), item, to);
};
