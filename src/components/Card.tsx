import { CardContainer } from "../styles";

interface CardProps {
  text: string;
  id: string;
}

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
