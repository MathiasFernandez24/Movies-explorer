import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategorieCard from '../components/CategorieCard'

const MoviesCategories = ({ navigation }) => {

    const onSelectCategorie = (categorie) => {
        navigation.navigate('MoviesList', {
            title: categorie,
        })
    }
    return (
        <View>
            <CategorieCard title={"En cartelera"} onSelectCategorie={onSelectCategorie} />
            <CategorieCard title={"Populares"} onSelectCategorie={onSelectCategorie} />
        </View>
    )
}

export default MoviesCategories

const styles = StyleSheet.create({})