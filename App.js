/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    FlatList, Button,
} from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './components/GoalInput';


const App = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);


    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}]);
        setIsAddMode(false);
    };

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.screen}>
            <Button title={'Add New Goal'} onPress={() => setIsAddMode(true)}/>
            <GoalInput visible={isAddMode}
                       onAddGoal={addGoalHandler}
                        onCancel={cancelGoalAdditionHandler}/>
            <FlatList data={courseGoals} renderItem={itemData =>
                <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>
            }/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },

});

export default App;
