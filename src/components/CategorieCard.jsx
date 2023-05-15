import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors'

const CategorieCard = ({ title, onSelectCategorie }) => {


    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelectCategorie(title)}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategorieCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 8,
        marginHorizontal: 16,
        padding: 10,
        backgroundColor: COLORS.primary,
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
    text: {
        fontSize: 25,
    }
})