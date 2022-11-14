import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import RootStackParamList from '../models/RootStackParamList'
import TaskSelectionRow from './TaskSelection/TaskSelectionRow'

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
          <View style={styles.container}>
            <Text style={styles.biggerWordText}>In this game, you will be presented 20 words, 1 by 1.</Text>
            <Text style={styles.biggerWordText}>You will have 5 seconds to remember each word.</Text>
            <Text style={styles.biggerWordText}>Once all the words have been presented, you will be given one minute to recall as many words as you can (in any order).</Text>
            <Text style={styles.biggerWordText}>Are you ready?</Text>
          </View>
          <View style={styles.row}>

            <TaskSelectionRow name="START" onPress={() => this.props.navigation.navigate('MemoryRecall')} />
          </View>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  outer: {
    height: '100%',
    paddingVertical: 8,
  },
  row: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  biggerWordText: {
        fontSize: 20,
        textAlign: 'center',
      },
})


