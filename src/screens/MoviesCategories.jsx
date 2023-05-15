import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import CategorieCard from '../components/CategorieCard'
import { COLORS } from '../theme/colors'

// const categories = ["En cartelera", "Populares", "Proximamente", "Mejor Valoradas", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
const categories = ["En cartelera", "Populares", "Proximamente", "Mejor Valoradas"]

const MoviesCategories = ({ navigation }) => {

    const onSelectCategorie = (categorie) => {
        navigation.navigate('MoviesList', {
            title: categorie,
        })
    }
    const renderItem = (i) => <CategorieCard key={i.item} title={i.item} onSelectCategorie={onSelectCategorie} />

    return (
        <View style={styles.container}>
            <FlatList
                // numColumns={2}
                data={categories}
                renderItem={renderItem}
            />
        </View>
    )
}

export default MoviesCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
    }
})