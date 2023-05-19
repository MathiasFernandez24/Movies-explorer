import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { agregarALista } from '../../reduxRTK/slices/contador'
import MovieCard from '../../components/MovieCard'
import MovieCardFavorite from './components/MovieCardFavorite'
import { COLORS } from '../../theme/colors'

const Favorite = ({ navigation }) => {
    // const textoDeRedux = useSelector(state => state.contador.nombre)
    // const listaDeRedux = useSelector(state => state.contador.listilla)
    const favoriteListMovies = useSelector(state => state.favMovies.pelis)
    const dispatch = useDispatch()

    // const addRedux = () => {
    //     dispatch(agregarALista(textoDeRedux))
    //     console.log(textoDeRedux);
    // }

    const onSelectMovie = (item) => {
        navigation.navigate('MovieDetail', {
            title: item.title,
            item: item,
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <FlatList
                    data={favoriteListMovies}
                    renderItem={(i) => <MovieCardFavorite key={i.item.id} onSelectMovie={onSelectMovie} item={i.item} />}
                />
            </View>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        // paddingBottom: 10,
        backgroundColor: COLORS.tertiary,
    },
    container2: {
        overflow: 'hidden',
        flex: 1,
        borderRadius: 30,
        backgroundColor: COLORS.secondary,
    }
})