import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './tab/TabNavigator'
import Auth from '../screens/auth/Auth'
import { useSelector } from 'react-redux'

const MainNavigator = () => {
    const user = useSelector((state) => state.auth)

    return (
        <NavigationContainer>
            {
                user.email ?
                    // true ?
                    <TabNavigator />
                    :
                    <Auth />
            }
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})