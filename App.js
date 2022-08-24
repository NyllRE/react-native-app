import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';


export default function App() {
  const [newGoal, setNewGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  
  function goalInput(val) {
    setNewGoal(val);
  }

  function addGoal() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {text: newGoal, key: Math.random().toString() }
    ])
  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>

        <TextInput
          style={[styles.TextInput, styles.text]}
          placeholder='your course goal'
          onChangeText={goalInput}
        />
        <Button title="add goal" onPress={addGoal} />

      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={ (itemData) => {
            return (
              <View style={styles.goal}>
                <Text style={styles.text}>{itemData.item.text}</Text>
              </View>
            )
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#324'
  },
  text: {
    color: 'white'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,

    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  },
  goal: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#0006'
  }
});
