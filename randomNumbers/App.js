import React, {useState, useEffect} from 'react';

import {Text, SafeAreaView} from 'react-native';



const App = () => {

  const [number, setNumber] = useState(0)

  const handleNumbers = () => {

    const newNumber = Math.floor(Math.random() * 10  
    )
  setNumber(newNumber)
  
  }

  return (


<SafeAreaView  style={style.container}>
<Text style={style.number}>Number Generate</Text>
    <TouchableOpacity onPress={handleNumbers} style={style.button}>

    <Text>Number Generate</Text>

    </TouchableOpacity>

    </SafeAreaView>


  );
    


  };

const style = StyleSheet.create({

  container:{
    backgroundColor: '#bbdac2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  number:{

    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',


  },
  button:{
      backgroundColor: '#fff',
      width: '100%',
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,



  }


})

export default App;