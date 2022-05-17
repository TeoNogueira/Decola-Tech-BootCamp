import React from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView } from 'react-native'

const colorGithub = '#010409'
const imageGithub = 'https://avatars.githubusercontent.com/u/53917980?v=4'
const colorFontGithub = '#c9d1d9';
const App = () => {

    return (

        <SafeAreaView style={style.container}>
            <StatusBar accessibilityLabel='Teo Nogueira Develoepr' backgroundColor={colorGithub} barStyle='dark-content'/>
        <View style={style.content}>
        {/* <Text style={style.text}>Hello World!</Text> */}
        <Image style={style.avatar} source={{uri:imageGithub}}/>

        <Text style={[style.defaultText, style.name]}>Teo Nogueira</Text>
        <Text style={[style.defaultText, style.nickName]}>teomuniz</Text>
        <Text style={[style.defaultText, style.description]}>
        Hello my name is Teófilo Nogueira currently studying at EBAC through the front-end engineering course, i develop front-end web applications, i love technology and I have been looking for daily knowledge, i am willing to face any challenges as a developer.
        </Text>
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
        fontWeight: 'bold',
        fontSize: 24,

    },

    nickName: {

        fontSize: 18,
    },
    description: {

        fontSize: 14,
    }

    // text: {

    //     fontSize: 36,
    //     fontWeight: 'bold',
    //     fontFamily: 'Helvetica',
    //     color: 'black',
    // }

})