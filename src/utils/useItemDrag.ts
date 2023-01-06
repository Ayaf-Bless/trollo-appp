import { useAppState } from "../state/AppStatesCtx";
import { useDrag } from "react-dnd";
import { DraggedItem } from "../types/dragItem";
import { setDraggedItem } from "../state/actions";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";

export const useItemDrag = (item: DraggedItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));

      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });
  useEffect(() => {
    preview(getEmptyImage(), {
      captureDraggingState: true,
    });
  }, [preview]);
  return { drag };
};
