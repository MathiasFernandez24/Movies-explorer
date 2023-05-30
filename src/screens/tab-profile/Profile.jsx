import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reduxRTK/slices/AuthSilce'
import { deleteAllFavMovieLocal } from '../../reduxRTK/slices/FavoriteMoviesSlice'
import { COLORS } from '../../theme/colors'

const Profile = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.auth.email)
    const onHandleLogout = () => {
        dispatch(logout())
        dispatch(deleteAllFavMovieLocal())
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg' }}
                style={styles.imagen} />
            <Text>Mail</Text>
            <Text style={styles.email}>{email}</Text>
            < Button title='Logout' onPress={onHandleLogout} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: 20,
    },
    imagen: {
        width: 300,
        height: 300,
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical: 50,
    },
    email: {
        fontSize: 20,
        marginBottom: 30
    }
})