import { StyleSheet, Button as ReactButton } from "react-native";

interface IButtonProps {
  color: string;
  text: string;
  onClick: () => void;
}

const Button = ({ color, text, onClick }: IButtonProps) => {
  const buttonColor = (color: string) => ({
    backgroundColor: color,
  });
  return <ReactButton title="asd" onPress={onClick}></ReactButton>;
};

export default Button;
