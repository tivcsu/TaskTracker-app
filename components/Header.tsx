//import Button from "./Button";
import { Button, View, StyleSheet, Text, TouchableOpacity } from "react-native";

interface IHeaderProps {
  title: string;
  onAdd: () => void;
  showAdd: boolean;
}

const Header = ({ title, onAdd, showAdd }: IHeaderProps) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => onAdd()}>
        <View style={showAdd ? styles.buttonBack : styles.buttonAdd}>
          {showAdd ? (
            <Text style={{ color: "white" }}>Back</Text>
          ) : (
            <Text style={{ color: "white" }}>Add</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
  },
  buttonAdd: {
    backgroundColor: "green",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    tintColor: "white",
  },
  buttonBack: {
    backgroundColor: "red",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    tintColor: "white",
  },
});

export default Header;
