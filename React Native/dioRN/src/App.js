import React from 'react';
import {
     View,
      Image,
       Text,
        StyleSheet,
         SafeAreaView,
            Pressable,
                Linking } from 'react-native';

const colorGithub = '#010409'
const imageGithub = 'https://avatars.githubusercontent.com/u/53917980?v=4'
const colorFontGithub = '#c9d1d9';
const colorDarkFontGithub = '#4F565E';
const urlGithub = 'https://github.com/TeoNogueira'

const App = () => {

    const handlePressGoToGithub = async () => {

     const res =  await  Linking.canOpenURL(urlGithub);

     if(res) {

        await Linking.openURL(urlGithub)
     }
    }

    return (

        <SafeAreaView style={style.container}>
            <StatusBar accessibilityLabel='Teo Nogueira Developer' backgroundColor={colorGithub} barStyle='dark-content'/>
        <View style={style.content}>
        {/* <Text style={style.text}>Hello World!</Text> */}
        <Image style={style.avatar} source={{uri:imageGithub}}/>

        <Text accessibilityLabel='Teo Nogueira | TEXT' style={[style.defaultText, style.name]}>Teo Nogueira</Text>

        <Text accessibilityLabel='Teo Muniz | NICKNAME'  style={[style.defaultText, style.nickName]}>teomuniz</Text>

        <Text accessibilityLabel='Teo Nogueira | DESCRIPTION'  style={[style.defaultText, style.description]}>
        Hello my name is Teófilo Nogueira currently studying at EBAC through the front-end engineering course, i develop front-end web applications, i love technology and I have been looking for daily knowledge, i am willing to face any challenges as a developer.
        </Text>
        <Pressable onPress={handlePressGoToGithub}>

        <View style={style.button}>

            <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
        </View>
        </Pressable> 

     </View>
     </SafeAreaView>

    ) 

};

export default App;

const style = StyleSheet.create({

    container: {
        backgroundColor: colorGithub,
        flex: 1, /// expand totally screen
        justifyContent: 'center',
        alignItems: 'center',
    },

    content:{
        justifyContent: 'center',
        alignItems: 'center', //flex-start, flex-end|
        padding: 20,
    },

    avatar: {

        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,


    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: colorDarkFontGithub,

    },

    nickName: {

        fontSize: 18,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,

    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    // text: {

    //     fontSize: 36,
    //     fontWeight: 'bold',
    //     fontFamily: 'Helvetica',
    //     color: 'black',
    // }

})