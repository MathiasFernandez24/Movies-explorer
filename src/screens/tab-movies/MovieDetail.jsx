import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../theme/colors';
import { useMovieDetail } from '../../service/API';
import { Octicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavMovie, deleteFavMovie, deleteMoviesToFirebase, sendMoviesToFirebase, updateMovieInFirebase } from '../../reduxRTK/slices/FavoriteMoviesSlice';


const MovieDetail = ({ route }) => {
    const { item } = route.params
    const dispatch = useDispatch()
    const favoriteListMovies = useSelector(state => state.favMovies)
    const { detail } = useMovieDetail(item.id)
    const isFavorite = favoriteListMovies.pelis.find((i) => i.id == item.id)

    const onAddFavorites = () => {
        // console.log(isFavorite);
        if (isFavorite) {
            dispatch(deleteFavMovie(item))
            dispatch(deleteMoviesToFirebase(item))
            // dispatch(deleteFavMovie(item))
            // dispatch(deleteFavMovie(item))

        } else {
            dispatch(addFavMovie(item))
            // dispatch(sendMoviesToFirebase(item))
            dispatch(updateMovieInFirebase(item))
        }
    }

    return (
        <ScrollView style={styles.containerScroll}>
            <Image source={{ uri: item.backdrop_path }} style={styles.image} />
            <TouchableOpacity style={styles.favoriteButton} onPress={onAddFavorites}>
                <Octicons name={isFavorite ? "heart-fill" : "heart"} size={32} color="red" />
            </TouchableOpacity>
            <View style={styles.containerDetail}>
                <Text style={styles.title}>{item.title}</Text>
                {detail.tagline && <Text style={styles.textTagline}>"{detail.tagline}"</Text>}
                <View style={styles.genresContain}>
                    {detail.genres?.map((i) => <Text style={styles.textGenres} key={i.id}>#{i.name}  </Text>)}
                </View>
                <View style={styles.detailCard}>
                    <Text style={styles.textDetail}>{item.description}</Text>
                </View>
                <Text>Fecha lanzamiento: {detail.releaseDate}</Text>
                <Text style={styles.titleLanguages}>Idiomas disponibles:</Text>
                <View style={styles.genresContain}>
                    {detail.spokenLanguages?.map((i) => <Text style={styles.spokenLanguagesCard} key={i.name}>•{i.name}</Text>)}
                </View>
            </View>
        </ScrollView>
    )
}

export default MovieDetail

const styles = StyleSheet.create({
    containerDetail: {
        flex: 1,
        padding: 10,
    },
    containerScroll: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    image: {
        height: 230,
        resizeMode: 'cover',
    },
    title: {
        // alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',

    },
    detailCard: {
        marginTop: 20,
        backgroundColor: COLORS.tertiary,
        opacity: 0.75,
        padding: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    },
    textDetail: {
        fontSize: 20,
    },
    genresContain: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        marginTop: 5,
    },
    textGenres: {
        color: COLORS.secondary,
        fontSize: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        fontWeight: '300',
        backgroundColor: COLORS.acent,
        margin: 2,
        borderRadius: 5,
        padding: 2,
    },
    textTagline: {
        fontWeight: '200',
        fontStyle: 'italic',
    },
    titleLanguages: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: '400'
    },

    spokenLanguagesCard: {
        fontSize: 16,
        fontWeight: '300',
    },
    favoriteButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        padding: 5,

    }
})