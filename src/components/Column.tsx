import { ColumnTitle, CardContainer } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

interface ColumnProps {
  text: string;
}

export const Column = ({ text }: ColumnProps) => {
  return (
    <CardContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="doing stuff" />
      <AddNewItem
        toggleButtonText="+ add another cart"
        onAdd={() => console.log("new card added")}
        dark
      />
    </CardContainer>
  );
};
