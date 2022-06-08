import React, {useState, useEffect} from 'react';
import  {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'
// import images from './assets/images/eco-light-off.png'


//access images: require('assets/images/etc...')
const App = () => {

  // const toggle = false;
  const [toggle, setToggle] = useState(false)

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  // Change State | Then useEffect active

  useEffect(() => {
    // const txt = 'Atualizou o componente'
    // Alert.alert(`${txt} ${toggle}`)
    Torch.switchState(toggle)

  }, [toggle]);

useEffect(() => {
// When the cell phone is shaken, we will change the Toggle


  const subscription = RNShake.addListener(() => {
    setToggle(oldToggle => !oldToggle)
  });

// This function will be called when the component is unmounted.
return () => subscription.remove()

}, [])


  return <View style={toggle ? style.containerLight :  style.container} >
 <TouchableOpacity onPress={handleChangeToggle}>

  <Image 
    style={toggle ? style.lightingOn :style.lightingOff}
    source={
      toggle
      ? require('./assets/images/eco-light.png')
      : require('./assets/images/eco-light-off.png')}
  
  />
  <Image 
    style={style.dioLogo}
    source={
      toggle
       ? require('./assets/images/logo-dio.png')
      : require('./assets/images/logo-dio-white.png')
       }
  
  />

</TouchableOpacity>
  </View>
}


export default App

const style = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },

  containerLight: {

    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },

  lightingOn:{

    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,

  },

  lightingOff:{

    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,

  },

  dioLogo:{

    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,

  },
})