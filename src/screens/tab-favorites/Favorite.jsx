import { Button, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { agregarALista } from '../../reduxRTK/slices/contador'
import MovieCard from '../../components/MovieCard'
import MovieCardFavorite from './components/MovieCardFavorite'
import { COLORS } from '../../theme/colors'
import { getMoviesFromFirebase } from '../../reduxRTK/slices/FavoriteMoviesSlice'

const Favorite = ({ navigation }) => {
    // const textoDeRedux = useSelector(state => state.contador.nombre)
    // const listaDeRedux = useSelector(state => state.contador.listilla)
    const favoriteListMovies = useSelector(state => state.favMovies.pelis)
    const dispatch = useDispatch()
    const [refreshing, setRefreshing] = useState(false);

    const userID = useSelector(state => state.auth.userId)
    const userEmail = useSelector(state => state.auth.email)
    const userEmailName = userEmail.split('@')
    const userId = userEmailName[0] + "_" + userID

    useEffect(() => {
        dispatch(getMoviesFromFirebase(userId))
    }, [])


    const handleRefresh = () => {
        setRefreshing(true);

        // Simular una solicitud de actualización de datos
        setTimeout(() => {
            // console.log("ACTUALIZACNDO--------------");
            dispatch(getMoviesFromFirebase(userId))
            setRefreshing(false);
        }, 50);
    };
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
                    renderItem={(i) => <MovieCardFavorite key={i.item.id} onSelectMovie={onSelectMovie} item={i.item} userId={userId} />}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
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
        backgroundColor: COLORS.acent,
    },
    container2: {
        overflow: 'hidden',
        flex: 1,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: COLORS.secondary,
    }
})