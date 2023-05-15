import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors'

const MovieCard = ({ item, onSelectMovie }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { onSelectMovie(item) }}>
                <Image source={{ uri: item.poster_path }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    container: {
        width: '48%',
        backgroundColor: COLORS.primary,
        margin: '1%',
        borderRadius: 10,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    image: {
        height: 250,
        resizeMode: 'center',
        borderRadius: 10,
    }
})