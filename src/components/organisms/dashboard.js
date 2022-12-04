import React from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import QuizCard from "../molecules/quizCard/quizCard";

const Dashboard = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <QuizCard
                description={'test test test testvtest test v v v test v testtest test test lorem test'}
                titre={'Titre'}
            />
            <QuizCard
                description={'oooo,,,,,,,,oooooooooooooooooooooooooooooooooooooooooooooooooooo ooooooooooooooooooo o'}
                titre={'QUIZ 2'}
            />
        </View>

        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",


    }
})

export default Dashboard;
