import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import RootStackParamList from '../models/RootStackParamList'
import TaskSelectionRow from './TaskSelection/TaskSelectionRow'

type Props = NativeStackScreenProps<RootStackParamList, 'TaskSelection'>
type State = Record<string, unknown>

export default class PANASIntructions extends Component<Props, State> {
  render() {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.outer}>
          <View style={styles.container}>
            <Text>Insert instructions here</Text>
          </View>
          <View style={styles.row}>
            <TaskSelectionRow name="START" onPress={() => this.props.navigation.navigate('PANASTask')} />
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
})


