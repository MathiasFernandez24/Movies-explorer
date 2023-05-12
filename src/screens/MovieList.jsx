import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { useMoviesNowPlaying, useMoviesPopular } from '../service/API'

const MovieList = ({ navigation, route }) => {
    const { title } = route.params

    switch (title) {
        case "En cartelera": var { list } = useMoviesNowPlaying()
            break;
        case "Populares": var { list } = useMoviesPopular()
            break;
        default: console.log("opcion inexistente");
            break;
    }

    const onSelectMovie = (item) => {
        navigation.navigate('MovieDetail', {
            item: item,
        })
    }

    return (
        <View style={styles.container}>
            {/* <Text>MovieNavigator</Text> */}
            <FlatList
                numColumns={2}
                data={list}
                renderItem={(i) => <MovieCard item={i.item} key={i.item.id} onSelectMovie={onSelectMovie} />}
                keyExtractor={i => i.id}
            />
        </View>
    )
}

export default MovieList

const styles = StyleSheet.create({})