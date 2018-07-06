import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

const imgChecList = require('../assets/checklist.png');
const imgPlus = require('../assets/plus_64.png');

export default class ToDoTasks extends Component {

    static navigationOptions = {
        tabBarLabel: 'To Do',
        tabBarIcon: ({ tintColor }) => (
            <Image source={imgChecList}
                style={[styles.icon, { tintColor }]} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.floatButton}>
                    <Image source={imgPlus} style={styles.img} />
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        width: 26,
        height: 26
    },
    img: {
        width: 50,
        height: 50
    },
    floatButton: {
        position: 'absolute',
        right: 20,
        bottom: 20
    },

});
