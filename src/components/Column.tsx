import { ColumnTitle, CardContainer } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { useAppState } from "../state/AppStatesCtx";
import { addTask } from "../state/actions";

interface ColumnProps {
  text: string;
  id: string;
}

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <CardContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} id={task.id} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ add another cart"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </CardContainer>
  );
};
