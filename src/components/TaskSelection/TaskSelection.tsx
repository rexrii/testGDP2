import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import RootStackParamList from '../../models/RootStackParamList'
import TaskSelectionRow from './TaskSelectionRow'

type Props = NativeStackScreenProps<RootStackParamList, 'TaskSelection'>
type State = Record<string, unknown>

/**
 * Renders a list of tasks that the user can navigation to.
 *
 * Implemented using a `ScrollView`. This renders all views at once, so it's not ideal for large lists, where a `FlatList` would be better.
 * As there are very few rows, this is fine and makes implementing static rows easier.
 *
 * @prop navigation The navigation object.
 */
export default class TaskSelection extends Component<Props, State> {
  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.outer}>
          <View style={styles.row}>
            <TaskSelectionRow name="Emotion Sensitivity" onPress={() => this.props.navigation.navigate('EmotionSensitivity')} />
          </View>
          <View style={styles.row}>
            <TaskSelectionRow name="Memory Game" onPress={() => this.props.navigation.navigate('MemoryRecallInstructions')} />
          </View>
          <View style={styles.row}>
            <TaskSelectionRow name="Reinforcement Learning" onPress={() => this.props.navigation.navigate('ReinforcementLearning')} />
          </View>
          <View style={styles.row}>
            <TaskSelectionRow name="Delay Discounting" onPress={() => this.props.navigation.navigate('DelayDiscounting')} />
          </View>
          <View style={styles.row}>
            <TaskSelectionRow name="Read your mood" onPress={() => this.props.navigation.navigate('PANASInstructions')} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outer: {
    height: '100%',
    paddingVertical: 8,
  },
  row: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
})
