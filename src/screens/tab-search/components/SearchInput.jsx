import { Keyboard, Slider, StyleSheet, Switch, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../../theme/colors'
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { changeMessage } from '../../../store/actions/Favorites.action';
import { cambiarNombre } from '../../../reduxRTK/slices/contador';

const SearchInput = ({ search }) => {
    const [input, setInput] = useState("")
    const [isIncludeAdult, setIsIncludeAdult] = useState(false)
    const [isSliderEnabled, setIsSliderEnabled] = useState(false)
    const [year, setYear] = useState(null)

    const dispatch = useDispatch()

    const courrentYear = new Date().getFullYear()


    const toggleSwitch = () => {
        setIsIncludeAdult(prevState => !prevState)
    }
    const toggleSwitchSlider = () => {
        isSliderEnabled && setYear(null)
        setIsSliderEnabled(prevState => !prevState)
        // onPressSearch()
    }
    const onPressSearch = () => {
        search(input, isIncludeAdult, year)
        Keyboard.dismiss()
        // dispatch(cambiarNombre(input))
        // dispatch()
    }
    const onPressRestaurar = () => {
        setIsIncludeAdult(false)
        setIsSliderEnabled(false)
        setYear(null)
        setInput("")
    }

    console.log(year);
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Feather name="search" size={24} color="black" />
                <TextInput style={styles.input} value={input} onChangeText={(text) => setInput(text)} placeholder='Search' />
            </View>
            <View style={styles.sliderContainer}>
                <Switch
                    style={styles.switch}
                    value={isIncludeAdult}
                    onValueChange={toggleSwitch}
                // trackColor={{ true: 'green', false: 'red' }}
                // thumbColor={isIncludeAdult ? 'pink' : 'yellow'}
                />
                <Text>Contenido para adultos</Text>
            </View>
            <View style={styles.sliderContainer}>
                <Switch
                    style={styles.switch}
                    value={isSliderEnabled}
                    onValueChange={toggleSwitchSlider}
                />
                <Text>Buscar por año</Text>
                <Text>   {year}</Text>
            </View>
            <Slider
                maximumValue={courrentYear}
                minimumValue={1990}
                onValueChange={(value) => { setYear(value) }}
                step={1}
                disabled={!isSliderEnabled}
                style={styles.slider}
            />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={onPressRestaurar} style={styles.buttonSearch}>
                    <Text style={styles.textButton}>Restaurar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressSearch} style={styles.buttonSearch}>
                    <Text style={styles.textButton}>Buscar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.tertiary,
        // borderWidth: 1,
        // marginHorizontal: 30,
        marginBottom: 10,
        // borderRadius: 2,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        alignSelf: 'center',
        borderBottomWidth: 1,
        width: '90%',
        // height: 30,
        padding: 5,
        fontSize: 20,
        // backgroundColor: COLORS.primary
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    buttonSearch: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    textButton: {
        fontSize: 20
    },
    slider: {
        margin: 10
    },
    switch: {
        marginHorizontal: 10,
        transform: [{ scale: 1.3 }]
    }

})