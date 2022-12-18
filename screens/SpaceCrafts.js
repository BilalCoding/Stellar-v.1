import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class SpaceCrafts extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Space Crafts</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});