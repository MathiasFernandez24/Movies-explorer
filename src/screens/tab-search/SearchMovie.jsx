import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchMovie = () => {
    return (
        <View style={styles.container}>
            <Text>SearchMovie</Text>
        </View>
    )
}

export default SearchMovie

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    }
})