import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchMovie from '../screens/tab-search/SearchMovie'

const SearchNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <>
            <Stack.Navigator
                initialRouteName='Search'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name='Search'
                    component={SearchMovie}
                />
            </Stack.Navigator>
        </>
    )
}

export default SearchNavigator

const styles = StyleSheet.create({})