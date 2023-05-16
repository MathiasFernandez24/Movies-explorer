import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { COLORS } from '../theme/colors'
import MoviesCategories from '../screens/tab-movies/MoviesCategories'
import MovieList from '../screens/tab-movies/MovieList'
import MovieDetail from '../screens/tab-movies/MovieDetail'
import { Ionicons } from '@expo/vector-icons';



const MovieNavigator = () => {

    const Header = (props) => (
        < View style={styles.header} >
            {
                props.route.params ?
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={props.navigation.goBack}>
                            <Ionicons name="md-return-up-back-outline" size={30} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.title}>{props.route.params?.title}</Text>
                    </View>
                    :
                    <Text style={styles.title}>CATEGORIAS</Text>
            }
        </View >
    )


    const Stack = createNativeStackNavigator()
    return (
        <>
            <Stack.Navigator
                initialRouteName='MoviesCategories'
                screenOptions={{
                    gestureEnabled: true,
                    headerBackVisible: true,
                    animation: 'slide_from_right',
                    // headerShown: false,
                    header: Header,
                    // headerStyle: {
                    // backgroundColor: COLORS.acent,
                    // }
                }}
            >
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
        </>
    )
}

export default MovieNavigator

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 40,
    },
    header: {
        // height: 70,
        backgroundColor: COLORS.tertiary,
        paddingTop: 30
    },
    title: {
        marginStart: 20,
        fontSize: 26,
        fontWeight: '800',
    }
})