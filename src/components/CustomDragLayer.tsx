import { useDragLayer } from "react-dnd";
import { useAppState } from "../state/AppStatesCtx";
import { CustomDragLayerContainer, DragPreviewWrapper } from "../styles";
import { Column } from "./Column";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();

  const { currentOffSet } = useDragLayer((monitor) => ({
    currentOffSet: monitor.getClientOffset(),
  }));

  return draggedItem && currentOffSet ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffSet}>
        <Column id={draggedItem.id} text={draggedItem.text} isPreview />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
