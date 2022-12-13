import { useAppState } from "../state/AppStatesCtx";
import { useDrag } from "react-dnd";
import { DraggedItem } from "../types/dragItem";
import { setDraggedItem } from "../state/actions";

export const useItemDrag = (item: DraggedItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));

      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });
  return { drag };
};
