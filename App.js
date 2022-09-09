import React, { useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0)
  useEffect( () => {
    document.title=`count(${counter})`
  })
  return (
    <View>
      <Text style={styles.titletext}> Simple Counter App</Text>
    <View style={styles.container}>
      <Text style={styles.textstyle}> Numbers Plus Minus here... </Text>
      <Text style={styles.number}>{counter}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCounter(counter + 1)} >
        <Text style={styles.buttontext}> Plus</Text>
      </TouchableOpacity>
      <View>
        {/* <Text> Number Minus here...</Text>
          <Text>{counter}</Text> */}
        <TouchableOpacity
        style={styles.button}
          onPress={() => { if (counter > 0) setCounter(counter - 1) }}
        >
          <Text style={styles.buttontext}>Minus</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
        style={styles.button}
          onPress={() => setCounter(0)}
        >
          <Text style={styles.buttontext}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    elevation:10,
    backgroundColor:"#a2a4a8",
    borderRadius:30,
    marginHorizontal:10,
    
  },
  textstyle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  number: {
    fontSize: 40,
    marginBottom:20
  },
  button: {
    height: 50,
    width: 90,
    borderRadius: 10,
    backgroundColor: "green",
    textAlign: 'center',
    paddingTop: 6,
    marginBottom:15
  },
  buttontext: {
    fontSize: 30
  },
  titletext:{
    fontSize:30,
    fontWeight:"bold",
    marginTop:50,
    textAlign:"center"
  }
});
