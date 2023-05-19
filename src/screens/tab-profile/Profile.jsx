import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'green',
    }
})