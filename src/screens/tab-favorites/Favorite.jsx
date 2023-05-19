import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'
import { useDispatch, useSelector } from 'react-redux'

const Favorite = () => {
    // const dispatch = useDispatch()
    const textoDeRedux = useSelector(state => state.favRed.message)
    const listaDeRedux = useSelector(state => state.favRed.fav)


    return (
        <View style={styles.container}>
            <Text>mesagge: {textoDeRedux}</Text>
            <Text>----------------------</Text>
            {
                listaDeRedux.map((i) => <Text key={i}>{i}</Text>)
            }
            <Text>----------------------</Text>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'red',
    }
})