import { DraggedItem } from "../types/dragItem";

export const isHidden = (
  draggedItem: DraggedItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean
): boolean => {
  return Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  );
};
