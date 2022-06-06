import React, {useState} from 'react';
import  {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import images from './assets/images/eco-light-off.png'


//access images: require('assets/images/etc...')
const App = () => {

  // const toggle = false;
  const [toggle, setToggle] = useState(false)

  const handleChangeToggle = () => {

  return setToggle(oldToggle => !oldToggle)

  }

  return <View style={toggle ? style.containerLight :  style.container} >
 <TouchableOpacity onPress={handleChangeToggle}>

  <Image 
    style={toggle ? style.lightingOff :style.lightingOn}
    source={
      toggle
       ? require('./assets/images/eco-light-off.png')
      : require('./assets/images/eco-light.png')}
  
  />
  <Image 
    style={toggle ? style.lightingOff :style.lightingOn}
    source={
      toggle
       ? require('./assets/images/logo-dio-white.png')
      : require('./assets/images/logo-dio.png')}
  
  />

</TouchableOpacity>
  </View>
}


export default App

const style = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: 'crimson',
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

    resizeNode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,

  },

  lightingOff:{

    resizeNode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,

  },

  dioLogo:{

    resizeNode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 250,
    height: 250,

  },
})