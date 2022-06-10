import React, {} from 'react';

import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather'

import images from './assets/images/photo-01.jpg'

const App = () => {

return(
<>
  <View style={style.page}>

    <View style={style.containerHeader}>

    <Image style={style.photo} source={images} />
    <Text style={style.nameAvatar}>Teófilo Nogueira</Text>
    <Text style={style.func}>Desenvolvedor Mobile</Text>
  <View style={style.stylesIcons}>

<Icon name="github" size={30}/>
<Icon name="facebook" size={30}/>
<Icon name="linkedin" size={30}/>


  </View>
    </View>


<View style={style.card}>
<View style={style.cardHeader}>
<Text>Experiência Profissional</Text>
</View>
<View style={style.cardContent}>


</View>
</View> {/*2 Views */}



  </View>  {/*Finish View */}

</>
)

}


const style = StyleSheet.create({

  page:{

    background: '#E7E7E7',
    flex: 1,
  },
  containerHeader:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,

  },
  photo:{
     width: 250,
     height: 250,
     borderRadius: 125,

  },
  nameAvatar: {

    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,

  },
  func:{
    color: '#939393',
    marginBottom: 10,

  },
  stylesIcons:{
    flexDirection: 'row',
    marginTop: 20,
    width: '60%',
    alignItems: 'space-evenly',
    justifyContent: 'center',
  },
  card:{

    width: '60%',
    borderRadius: 5,
    border: 2,
    borderColor: '#939393',
    
  }

})

export default App;