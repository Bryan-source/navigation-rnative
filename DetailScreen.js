import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import NavigationBottom from './NavigationBottom';

function DetailScreen({route, navigation}) {

    const {id, description} = route.params;

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66bb6a'}}>
            <Text>Details Screen</Text>
            <Text>Tarea: {id}</Text>
            <Text>Description: {description}</Text>
            
            <NavigationBottom/>

        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#98ee99',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    }
})

export default DetailScreen;