import { useEffect, useState } from "react";
import { View, Text , TextInput, Button } from "react-native";


export default function Home({route, navigation, tasks, setTasks}) {
    useEffect(() => {
        if (route.params?.newTask) {
            setTasks([...tasks, {title: route.params.newTask}]);
        }
    }, [route.params?.newTask]);
    return(
        <View style= {{ display: 'flex', flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            {tasks.map( (task, index) => <Text key={index}> {task.title} </Text>)}
            
            <Button
                title="Press Me"
                onPress={() => navigation.navigate('AddTask')}
                color="#841584" 
            />
            
        </ View>
    );
}