import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, TextInput } from 'react-native'
import * as Progress from 'react-native-progress'

const numberOfWords = 20
const secondsPerWord = 5

const goodWords = ['Girl','Ambition','Sweetheart','Paradise','Inspired','Kindness','Beauty',
'Cheer','Useful','Glamour','Home','Relaxed','Mighty','God','Candy','Rescue','Music','silk',
'sky','trophy','vacation','valentine','wedding','young','Zest','Warmth',
'abundance','acceptance','ace','achievement','admire','adorable','advantage','adventure',
'affection','agreement','beverage','birthday','bird','bless','bliss','blossom',
'comfort','comedy','circus','confident','couple','desire','devoted','diamond',
'dignified','dinner','diploma','dog','dollar','dove','fame','family',
'festive','flirt','free','home','holiday','infant','infatuation','',
'intellect','intercourse','intimate','jewel','joke','jolly','joy','joyful',
'justice','lively','lottery','love','loved','loyal','lucky','luscious',
'lust','luxury','magical','masterful','melody','natural','nature','nectar',
'nude','ocean','optimism','pillow','pizza','pleasure','politeness','power',
'present','prestige','pretty','pride','proud','puppy','safe','sapphire',
'snow','snuggle','social','soft','song','soothe','space','spirit',
'spouse','spring','star','success','sugar','toy','travel','treasure',
'treat','triumph','triumphant','trophy','truth','tune','twilight','untroubled',
'win','woman','wish','wink']

const badWords = ['Brutal', 'Killer', 'Vandal', 'Scurvy', 'Dagger', 'Anguished', 'Slave',
'Hostage', 'Devil', 'Flabby','Feeble','Scornful','Ridicule','Accident','Decompose','Anger',
'Headache','Disappoint','Scum','Disaster','Stink','Wasp','Guilty','Foul','Frustrated','Jealousy',
'abduction','abuse','ache','addict','afraid','agony','alcoholic','alone',
'bomb','bored','broken','cockroach','coffin','confused','corpse','corrupt',
'dirty','disappoint','fat','fatigued','fault','fear','feeble','fever',
'filth','fire','flabby','foul','fraud','gripe','guillotine','gun',
'handicap','hardship','hate','hatred','helpless','hell','infection','inferior',
'insane','insecure','insult','intruder','invader','mad','maggot','malaria',
'malice','manure','massacre','measles','mutilate','neglect','nervous','nightmare',
'nuisance','poison','pollute','poverty','pressure','prison','punishment','pus',
'putrid','riot','roach','robber','rotten','rude','sad','scandal',
'scar','scared','scorn','scornful','scum','scurvy','seasick','snob',
'spider','starving','stench','stink','stress','stupid','suffocate','suicide',
'tobacco','tomb','toothache','tornado','torture','toxic','tragedy','traitor',
'trash','trauma','trouble','troubled','tumor','ugly','ulcer','unfaithful',
'unhappy','upset','urine','wicked']

let goodWordsPicked: string[] = []
let badWordsPicked: string[] = []

// Resets memory after test
function reset() {
  goodWordsPicked = []
  badWordsPicked = []
}

// Pick a random word from goodWords or badWords
function getRandomWord() {
  // 50% chance of positive word, and vice versa
  if (Math.random() < 0.5) {
    // Pick random word from good list
    const index = Math.floor(Math.random() * goodWords.length)
    if(goodWordsPicked.includes(goodWords[index].toLowerCase())){
        return getRandomWord();
    }
    // Remember word picked
    goodWordsPicked.push(goodWords[index].toLowerCase())

    return goodWords[index].toLowerCase()
  } else {
    // Pick random word from good list
    const index = Math.floor(Math.random() * badWords.length)
    if(badWordsPicked.includes(badWords[index].toLowerCase())){
            return getRandomWord();
        }
    // Remember word picked
    badWordsPicked.push(badWords[index].toLowerCase())
    return badWords[index].toLowerCase()
  }
}

// Get the overall number of words returned that are in goodWordsPicked and badWordsPicked
function getScore(rememberedWords) {
  let score = 0
  const words = rememberedWords.toString().toLowerCase().split(' ')
  const allWordsPicked = goodWordsPicked.concat(badWordsPicked)
  for (const word of words) {
    if (allWordsPicked.includes(word)) {
      score++
    }
  }
  return score
}

// Get the overall number of words returned that are in goodWordsPicked
function getGoodScore(rememberedWords) {
  let score = 0
  const words = rememberedWords.toString().toLowerCase().split(' ')
  for (const word of words) {
    if (goodWordsPicked.includes(word)) {
      score++
    }
  }
  return score
}

// Get the overall number of words returned that are in badWordsPicked
function getBadScore(rememberedWords) {
  let score = 0
  const words = rememberedWords.toString().toLowerCase().split(' ')
  for (const word of words) {
    if (badWordsPicked.includes(word)) {
      score++
    }
  }
  return score
}

function getComment(rememberedWords){
    var score = getScore(rememberedWords)
    if(score==numberOfWords){
        return "Perfect score!"
    } else if(score>=numberOfWords*3/4){
        return "Great score!"
    } else if(score>=numberOfWords/2){
              return "Good score!"
    } else {
        return "Needs improvement..."
    }
}


export default function App() {
  const [count, setCount] = useState(0) // Counts the number of words used
  const [wordsRemembered, setWordsRemembered] = useState(1) // The words returned by user
  const [gameEnded, setGameEnded] = useState(2) // Checks if the memory part of game has ended
  const [allWordsRemembered, setAllWordsRemembered] = useState(2)

  var interval;
  var Timer = require('react-live-timer');


  // Resets states after test finishes
  function resetAll() {
    reset()
    setCount(0)
    setWordsRemembered('')
    setAllWordsRemembered('')
    setGameEnded(false)
    clearInterval(interval);
  }

  function endGame() {
    setGameEnded(true)
  }

  function addToEnd(){
    setAllWordsRemembered(allWordsRemembered+" "+wordsRemembered)
    setWordsRemembered("")
    this.textInput.clear()
  }


  // When showing the words, update every 5 seconds
  useEffect(() => {
    resetAll()
    interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, secondsPerWord * 1000)

    return () => clearInterval(interval)
  }, [])

  // If game ended, show score screen
  if (count>=numberOfWords+(60/secondsPerWord) || gameEnded) {
    return (
      <View style={styles.container}>

        <Text>
          You recalled {getScore(allWordsRemembered)} (out of {goodWordsPicked.length + badWordsPicked.length}) words correctly
        </Text>


        <TouchableOpacity style={styles.button} onPress={resetAll}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // Show 10 words with a 5 second delay
  if (count < numberOfWords) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.wordText}>
            {getRandomWord()}
          </Text>
        </View>
      </View>
    )
  } else {
    // Show screen for user to answer
    return (
      <View style={styles.container}>
        <Text style={styles.biggerWordText}>Time given: 1 minute </Text>
        <Text></Text>
        <Progress.Bar progress={(count-numberOfWords)*secondsPerWord/60} width={200} />
        <Text></Text>

        <SafeAreaView>

          <Text style={styles.biggerWordText}>Please enter the words you remember.</Text>
          <Text style={styles.biggerWordText}> Words recalled:</Text>
          <Text style={styles.biggerWordText}> {allWordsRemembered} </Text>
          <TextInput ref={input => { this.textInput = input }} style={styles.input} onChangeText={(e) => setWordsRemembered(e)} />
        </SafeAreaView>

      <TouchableOpacity style={styles.button} onPress={addToEnd}>
        <Text>Add word</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity style={styles.button} onPress={endGame}>
        <Text>End Game</Text>
      </TouchableOpacity>
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
  wordText: {
      fontSize: 50,
      fontWeight: "bold"
    },
  biggerWordText: {
          fontSize: 20,
          textAlign: 'center',
  },
})

