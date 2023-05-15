import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieList from '../screens/MovieList'
import MovieDetail from '../screens/MovieDetail'
import MoviesCategories from '../screens/MoviesCategories'



const MovieNavigator = () => {




    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MoviesCategories'>
                <Stack.Screen
                    name='MoviesCategories'
                    component={MoviesCategories}
                    options={{
                        title: "Categorias"
                    }}
                />
                <Stack.Screen
                    name='MoviesList'
                    component={MovieList}
                    options={({ route }) => ({
                        title: route.params.title
                    })}
                />
                <Stack.Screen
                    name='MovieDetail'
                    component={MovieDetail}
                    options={({ route }) => ({
                        title: route.params.item.title
                    })}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MovieNavigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})