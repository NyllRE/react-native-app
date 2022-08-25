import { StyleSheet } from "react-native"

function GoalItem() {
   return (
      <View style={ncss.goal}>
         <Text style={ncss.text}>{itemData.item.text}</Text>
      </View>
   )
}

const ncss = StyleSheet.create({
  goal: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#0006'
  }
})

export default GoalItem