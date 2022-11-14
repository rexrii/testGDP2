import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TaskSelection from './src/components/TaskSelection/TaskSelection'
import EmotionSensitivityTask from './src/components/EmotionSensitivity/EmotionSensitivityTask'
import MemoryRecallInstructions from './src/components/MemoryRecall-Instructions'
import MemoryRecallTask from './src/components/MemoryRecallTask'
import RootStackParamList from './src/models/RootStackParamList'
import ReinforcedLearningTask from './src/components/ReinforcedLearning/ReinforcedLearningTask'
import DelayDiscountingMainMenu from './src/components/DelayDiscounting/DelayDiscountingMainMenu'
import PANASInstructions from './src/components/PANAS-Instructions'
import PANASTask from './src/components/PANASapp'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskSelection">
        <Stack.Screen name="TaskSelection" component={TaskSelection} options={{ title: 'Tasks' }} />
        <Stack.Screen name="EmotionSensitivity" component={EmotionSensitivityTask} options={{ title: 'Emotion Sensitivity' }} />
        <Stack.Screen name="MemoryRecallInstructions" component={MemoryRecallInstructions} options={{ title: 'Memory Recall Instructions' }} />
        <Stack.Screen name="MemoryRecall" component={MemoryRecallTask} options={{ title: 'Memory Recall' }} />
        <Stack.Screen name="ReinforcementLearning" component={ReinforcedLearningTask} options={{ title: 'Reinforcement Learning' }} />
        <Stack.Screen name="DelayDiscounting" component={DelayDiscountingMainMenu} options={{ title: 'Delay Discounting' }} />
        <Stack.Screen name="PANASInstructions" component={PANASInstructions} options={{ title: 'PANAS Instructions' }} />
        <Stack.Screen name="PANASTask" component={PANASTask} options={{ title: 'Read your mood' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
