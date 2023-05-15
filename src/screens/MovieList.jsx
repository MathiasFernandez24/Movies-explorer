import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import MovieCard from '../components/MovieCard'
import { useMoviesNowPlaying, useMoviesPopular, useMoviesTopRated, useMoviesUpcoming } from '../service/API'
import { COLORS } from '../theme/colors'

const MovieList = ({ navigation, route }) => {
    const { title } = route.params

    switch (title) {
        case "En cartelera": var { list } = useMoviesNowPlaying()
            break;
        case "Populares": var { list } = useMoviesPopular()
            break;
        case "Proximamente": var { list } = useMoviesUpcoming()
            break;
        case "Mejor Valoradas": var { list } = useMoviesTopRated()
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary
    }
})