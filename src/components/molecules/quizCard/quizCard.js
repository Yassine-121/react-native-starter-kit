import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {Input} from "../../atoms";
import {Colors} from '../../../styles';

const QuizCard = ({ titre, description, urlImage }) => {
    return (
        <View style={styles.container}>
            <View style={styles.text_container}>
            <Text style={styles.text}>{titre}</Text>
            </View>
            <View style={styles.cover}>
               <Image style={styles.img}  source={require('../../../assets/icons/google.png')}></Image>
            </View>
            <View style={styles.text_container}>
            <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        borderWidth:0,
        width: 'auto',
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderColor:'#808080',
        marginTop:50,
        elevation: 10,
        alignItems: 'center'
    },
    text: {
        fontSize :14,
        fontWeight:'500',
        textAlign: 'center',
        color: 'black',
    },
    text_container:{
        position :'relative',
        width: '100%',
        maxHeight: 50,
        bottom:0,
        padding: 5,
        borderBottomLeftRadius : 10,
        borderBottomRightRadius: 10
    },
    cover:{
        display : 'flex',
        width:'100%',
        position:'relative'
    },
    img:{
        width: 100,
        height: 100,
        borderRadius : 10
    },
    description:{
        fontSize :10,
        color:'black',
        textAlign: 'center',
        maxWidth:100 ,
    }
})

export default QuizCard;