import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [tomato, setTomato] = useState(false);
  const [steel, setSteel] = useState(false);
  const [lime, setLime] = useState(false);
  const [gold, setGold] = useState(false);
  function press(color) {
    if (color === 'tomato') {
      setTomato(true);
      setSteel(false);
      setLime(false);
      setGold(false);
    }
    if (color === 'steel') {
      setSteel(true);
      setTomato(false);
      setLime(false);
      setGold(false);
    }
    if (color === 'lime') {
      setLime(true);
      setTomato(false);
      setSteel(false);
      setGold(false);
    }
    if (color === 'gold') {
      setGold(true);
      setTomato(false);
      setSteel(false);
      setLime(false);
    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.colors}>
        <View style={tomato ? styles.tomato : styles.noColor}>
          <Text>Color Tomato</Text>
        </View>
        <View style={steel ? styles.steel : styles.noColor}>
          <Text>Color Steelblue</Text>
        </View>
        <View style={lime ? styles.lime : styles.noColor}>
          <Text>Color Limegreeen</Text>
        </View>
        <View style={gold ? styles.gold : styles.noColor}>
          <Text>Color Gold</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => press('tomato')}>
            <Text>Tomato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => press('steel')}>
            <Text>Steelblue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button} onPress={() => press('lime')}>
            <Text>Limegreen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => press('gold')}>
            <Text>Gold</Text>
          </TouchableOpacity>
      </View>
      </View>
      <View style={styles.name}>
        <Text>Justinas Goberis</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    margin: 10,
  },
  colors: {
    flex: 6,
  },
  buttons: {
    flex: 3,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  button: {
    flex: 1,
    backgroundColor: '#555',
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },  
  name: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tomato: {
    backgroundColor: "#ff6347",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noColor: {
    opacity: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  steel: {
    backgroundColor: "#4682b4",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lime: {
    backgroundColor: "#32cd32",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gold: {
    backgroundColor: "#ffd700",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
