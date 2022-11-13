import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { AppContainer } from "./styles";
import { useAppState } from "./state/AppStatesCtx";

export const App = () => {
  const { lists } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} id={list.id} key={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ add another list"
        onAdd={() => console.log("element added")}
      />
    </AppContainer>
  );
};
