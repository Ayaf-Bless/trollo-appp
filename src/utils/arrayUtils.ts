type Item = {
  id: string;
};

export const findItemIndexById = <T extends Item>(item: T[], id: string) => {
  return item.findIndex((item: T) => item.id === id);
};
