import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../theme/colors'
import { Octicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { deleteFavMovie } from '../../../reduxRTK/slices/FavoriteMoviesSlice';


const MovieCardFavorite = ({ onSelectMovie, item }) => {
    const dispatch = useDispatch()

    const deleteMovie = () => {
        dispatch(deleteFavMovie(item))
    }
    return (
        <TouchableOpacity onPress={() => { onSelectMovie(item) }}>
            <View style={styles.container}>

                <Image source={{ uri: item.poster_path }} style={styles.image} />
                <View style={styles.detailContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity style={styles.iconContainer} onPress={deleteMovie}>
                            <Octicons name={"heart-fill"} size={36} color="red" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default MovieCardFavorite

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // width: '48%',
        backgroundColor: COLORS.primary,
        marginBottom: 20,
        borderRadius: 10,
        padding: 5,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        flex: 1
        // backgroundColor: 'yellow'
    },
    description: {
        alignSelf: 'center',
        // fontWeight: 'bold',
        fontSize: 12,

    },
    image: {
        height: 250,
        width: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        backgroundColor: 'red'
    },
    detailContainer: {
        flex: 1,
        padding: 10,
    },
    iconContainer: {
        // width: 36
    }
})