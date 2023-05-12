import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors'

const CategorieCard = ({ title, onSelectCategorie }) => {


    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelectCategorie(title)}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategorieCard

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        backgroundColor: COLORS.tertiary,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
})