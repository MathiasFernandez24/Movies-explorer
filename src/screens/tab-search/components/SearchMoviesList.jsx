import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieCard from '../../../components/MovieCard';
import { COLORS } from '../../../theme/colors';

const SearchMoviesList = ({ navigation, list }) => {

    console.log(list);
    const onSelectMovie = (item) => {
        navigation.navigate('MovieDetail', {
            title: item.title,
            item: item,
        })
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={list}
                renderItem={(i) => <MovieCard item={i.item} key={i.item.id} onSelectMovie={onSelectMovie} />}
                keyExtractor={i => i.id}
            />
        </View>
    )
}

export default SearchMoviesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary
    }
})