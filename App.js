import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder='your course goal' />
        <Button title="add goal" />
      </View>
      <View>
        <Text> List Of Goals </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginizer: {
    margin: 10,
    padding: 6
  }
});
