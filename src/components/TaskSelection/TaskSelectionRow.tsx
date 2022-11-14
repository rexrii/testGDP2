import React, { Component } from 'react'
import { StyleSheet, Text, Platform, PlatformColor, Pressable } from 'react-native'

type Props = {
  name: string
  onPress: () => void
  disabled?: boolean
}
type State = Record<string, unknown>

/**
 * A single row in the task selection screen.
 *
 * @prop name The name of the task.
 * @prop onPress The function to call when the row is pressed.
 * @prop disabled Whether the row is disabled, optional.
 */
export default class TaskSelectionRow extends Component<Props, State> {
  render() {
    return (
      <Pressable style={styles.row} onPress={this.props.onPress} disabled={this.props.disabled}>
        <Text style={styles.text}>{this.props.name}</Text>
      </Pressable>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    elevation: 3,
    ...Platform.select({
      ios: {
        backgroundColor: PlatformColor('link'),
      },
      android: {
        backgroundColor: 'blue',
      },
      default: {
        backgroundColor: 'blue',
      },
    }),
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    ...Platform.select({
      ios: {
        color: PlatformColor('systemBackground'),
      },
      android: {
        color: 'white',
      },
      default: {
        color: 'white',
      },
    }),
  },
})
