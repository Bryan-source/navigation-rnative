import React from 'react';
import {StyleSheet, View} from 'react-native';
import Box from './Box';
import NavigationBottom from './NavigationBottom';
import tasks from './data/tasks';


function MenuScreen() {
    return (
        <View style={styles.root}>
            <View style={styles.containerBox}>
                {
                    tasks.map((task, i) => (
                        <Box 
                            key={i}
                            id = {task.id}
                            description = {task.description}    
                        />
                    ))
                }
            </View>

            <NavigationBottom />

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ccff90',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
})

export default MenuScreen;