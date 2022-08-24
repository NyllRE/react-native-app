import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';


export default function App() {
  const [newGoal, setNewGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])
  
  function goalInput(val) {
    setNewGoal(val);
  }

  function addGoal() {
    setCourseGoals((currentGoals) => [...currentGoals, newGoal])
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
        <ScrollView>

          {courseGoals.map((goal) =>
            <View style={styles.goal} key={goal}>
            <Text style={styles.text}>{goal}</Text>
            </View>
          )}

        </ScrollView>
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
