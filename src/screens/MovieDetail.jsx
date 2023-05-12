import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors'

const MovieDetail = ({ route }) => {
    const { item } = route.params
    return (
        // <View style={styles.container}>
        <ScrollView style={styles.container}>
            <Image source={{ uri: item.backdrop_path }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.detail}>{item.description}</Text>
        </ScrollView>
        // </View>
    )
}

export default MovieDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    },
    image: {
        height: 230,
        resizeMode: 'cover',
    },
    title: {
        margin: 5,
        alignSelf: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
    detail: {
        margin: 10,
        flex: 1,
        fontSize: 20,
    },

})