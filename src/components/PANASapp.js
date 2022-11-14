import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, TextInput } from 'react-native'
import * as Progress from 'react-native-progress'
import { RadioButton } from 'react-native-paper';
import Slider from '@react-native-community/slider';

//Test
class QuizQuestion {
  constructor(question) {
    this.question = question;
    this.answer = 0;
  }

  getAnswerText(i){
    if(this.answer == i){
        return <text> i </text>
    } else {
    return <text style = {styles.boldText}> i </text>
    }
  }
}

/*
Answers:
0: no answer
1: very slightly or not at all
2. A little
3. Moderately
4. Quite a little
5. Extremely
*/



var q1 = new QuizQuestion("Interested");
var q2 = new QuizQuestion("Distressed");
var q3 = new QuizQuestion("Excited");
var q4 = new QuizQuestion("Upset");
var q5 = new QuizQuestion("Strong");

var q6 = new QuizQuestion("Guilty");
var q7 = new QuizQuestion("Scared");
var q8 = new QuizQuestion("Hostile");
var q9 = new QuizQuestion("Enthusiastic");
var q10 = new QuizQuestion("Proud");

var q11 = new QuizQuestion("Irritable");
var q12 = new QuizQuestion("Alert");
var q13 = new QuizQuestion("Ashamed");
var q14 = new QuizQuestion("Inspired");
var q15 = new QuizQuestion("Nervous");

var q16 = new QuizQuestion("Determined");
var q17 = new QuizQuestion("Attentive");
var q18 = new QuizQuestion("Jittery");
var q19 = new QuizQuestion("Active");
var q20 = new QuizQuestion("Afraid");

const questionList = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20]

function getDesc(i){
    if(i==1){
        return "Not at all"
    }
    if(i==2){
        return "A little"
    }
    if(i==3){
        return "Moderately"
    }
    if(i==4){
        return "Quite a bit"
    }
    if(i==5){
        return "Extremely"
    }
}

export default function App() {
    const [questionNo1, setQuestionNo1] = useState(0)
    const [questionNo2, setQuestionNo2] = useState(1)
    const [questionNo3, setQuestionNo3] = useState(2)
    const [questionNo4, setQuestionNo4] = useState(3)
    const [questionNo5, setQuestionNo5] = useState(4)

    const[currentAnswer1, setCurrentAnswer1] = useState(5)
    const[currentAnswer2, setCurrentAnswer2] = useState(6)
    const[currentAnswer3, setCurrentAnswer3] = useState(7)
    const[currentAnswer4, setCurrentAnswer4] = useState(8)
    const[currentAnswer5, setCurrentAnswer5] = useState(9)

    const [allAnswersText, setAllAnswersText] = useState(11)

    function nextQuestion(){
    setQuestionNo1(questionNo1+5)
    setQuestionNo2(questionNo2+5)
    setQuestionNo3(questionNo3+5)
    setQuestionNo4(questionNo4+5)
    setQuestionNo5(questionNo5+5)

    addAnswerToEnd()
    setCurrentAnswer1(3)
    setCurrentAnswer2(3)
    setCurrentAnswer3(3)
    setCurrentAnswer4(3)
    setCurrentAnswer5(3)
    }
    function addAnswerToEnd(){
        if(allAnswersText==""){
            setAllAnswersText(
                currentAnswer1.toString()+","+
                currentAnswer2.toString()+","+
                currentAnswer3.toString()+","+
                currentAnswer4.toString()+","+
                currentAnswer5.toString()
            )
        } else {
            setAllAnswersText(
                allAnswersText+","+
                currentAnswer1.toString()+","+
                currentAnswer2.toString()+","+
                currentAnswer3.toString()+","+
                currentAnswer4.toString()+","+
                currentAnswer5.toString()
            )
        }
    }

    function resetAll() {
        setQuestionNo1(0)
        setQuestionNo1(1)
        setQuestionNo1(2)
        setQuestionNo1(3)
        setQuestionNo1(4)
        setCurrentAnswer1(3)
        setCurrentAnswer2(3)
        setCurrentAnswer3(3)
        setCurrentAnswer4(3)
        setCurrentAnswer5(3)
        setAllAnswersText("")
      }

    useEffect(() => {
        resetAll()
      }, [])

    if(questionNo1 < questionList.length){
        return (
              <View style={styles.container}>
                <Text style={styles.wordText}>{questionList[questionNo1].question}</Text>
                <Slider
                    style={{width: 300, height: 40}}
                    minimumValue={1}
                    maximumValue={5}
                    value = {currentAnswer1}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    step = {1}
                    onSlidingComplete={(v) => setCurrentAnswer1(v)}
                />
                <Text> {getDesc(currentAnswer1)} </Text>
                <Text style={styles.wordText}>{questionList[questionNo2].question}</Text>
                <Slider
                    style={{width: 300, height: 40}}
                    minimumValue={1}
                    maximumValue={5}
                    value = {currentAnswer2}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    step = {1}
                    onSlidingComplete={(v) => setCurrentAnswer2(v)}
                />
                <Text> {getDesc(currentAnswer2)} </Text>
                <Text style={styles.wordText}>{questionList[questionNo3].question}</Text>
                <Slider
                    style={{width: 300, height: 40}}
                    minimumValue={1}
                    maximumValue={5}
                    value = {currentAnswer3}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    step = {1}
                    onSlidingComplete={(v) => setCurrentAnswer3(v)}
                />
                <Text> {getDesc(currentAnswer3)} </Text>
                <Text style={styles.wordText}>{questionList[questionNo4].question}</Text>
                <Slider
                    style={{width: 300, height: 40}}
                    minimumValue={1}
                    maximumValue={5}
                    value = {currentAnswer4}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    step = {1}
                    onSlidingComplete={(v) => setCurrentAnswer4(v)}
                />
                <Text> {getDesc(currentAnswer4)} </Text>
                <Text style={styles.wordText}>{questionList[questionNo5].question}</Text>
                <Slider
                    style={{width: 300, height: 40}}
                    minimumValue={1}
                    maximumValue={5}
                    value = {currentAnswer5}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                    step = {1}
                    onSlidingComplete={(v) => setCurrentAnswer5(v)}
                />
                <Text> {getDesc(currentAnswer5)} </Text>

                <Text></Text><Text></Text><Text></Text>


                <TouchableOpacity
                style={styles.button} onPress={nextQuestion}>
                    <Text>Next question</Text>
                </TouchableOpacity>
              </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text>
                    {allAnswersText}
                </Text>

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

   horizontalContainer: {
      flexDirection: 'row',
    },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  boldText: {
      fontWeight: "bold"
    },
  wordText: {
        fontSize: 30,
        fontWeight: "bold"
      },
  buttons: {
          justifyContent: 'center',
              alignItems: 'center',
        },
})

