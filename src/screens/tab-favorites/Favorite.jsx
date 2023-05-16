import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'

const Favorite = () => {
    return (
        <View style={styles.container}>
            <Text>Favorite</Text>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    }
})