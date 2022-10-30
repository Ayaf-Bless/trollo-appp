import { AddNewItem } from "./components/AddNewItem";
import { Column } from "./components/Column";
import { AppContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="My plan" />
      <AddNewItem
        toggleButtonText="+ add another list"
        onAdd={() => console.log("element added")}
      />
    </AppContainer>
  );
};
