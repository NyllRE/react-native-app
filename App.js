import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='your course goal' />
        <Button title="add goal" />
      </View>
      <View>
        <Text> List Of Goals </Text>
        <Text> 1 </Text>
        <Text> 2 </Text>
        <Text> 3 </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 8,

  },
});
