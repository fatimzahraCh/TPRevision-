import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function AddTask({ navigation}) {

    const [input, setInput] = useState('');

    return (
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            onChangeText={text => setInput(text)}
            value={input}
            placeholder="Type here..."
            underlineColorAndroid="transparent" 
        />
        <Button title="Submit" onPress={ () => { navigation.navigate("Home", {newTask: input})}} />
        <Text>You typed: {input}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10, // Add some space below the input
    },
});