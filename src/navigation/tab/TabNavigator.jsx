import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchMovie from '../../screens/tab-search/SearchMovie'
import MovieNavigator from '../MovieNavigator'
import { COLORS } from '../../theme/colors'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Favorite from '../../screens/tab-favorites/Favorite'
import Profile from '../../screens/tab-profile/Profile'

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName='MovieNav'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}

        >
            <BottomTabs.Screen
                name='MovieNav'
                component={MovieNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="local-movies" size={focused ? 36 : 30} color={focused ? COLORS.secondary : COLORS.tertiary} />
                    )
                }}
            />
            <BottomTabs.Screen
                name='SearchNav'
                component={SearchMovie}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="search" size={focused ? 36 : 30} color={focused ? COLORS.secondary : COLORS.tertiary} />
                    )
                }}
            />
            <BottomTabs.Screen
                name='Favorites'
                component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="favorite" size={focused ? 36 : 30} color={focused ? COLORS.secondary : COLORS.tertiary} />
                    )
                }}
            />
            <BottomTabs.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons name="account-circle" size={focused ? 36 : 30} color={focused ? COLORS.secondary : COLORS.tertiary} />
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.acent,
        // height: 250
    },
})