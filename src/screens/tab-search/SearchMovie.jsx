import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useMoviesSearch } from '../../service/API'
import SearchMoviesList from './components/SearchMoviesList'
import SearchInput from './components/SearchInput'
import { COLORS } from '../../theme/colors'

const SearchMovie = ({ navigation }) => {
    const [searchInput, setSearchInput] = useState("")
    const [includeAdult, setIncludeAdult] = useState(null)
    const [year, setYear] = useState(null)

    var { list } = useMoviesSearch({
        searchInput: searchInput,
        include_adult: includeAdult,
        year: year
    })

    console.log(list);


    const searchSimilarMovies = (input, isForAdult, yearSearch) => {
        setSearchInput(input)
        setIncludeAdult(isForAdult)
        setYear(yearSearch)
    }
    const closeKeyboard = () => {
        Keyboard.dismiss()
    }
    return (

        <TouchableWithoutFeedback onPress={closeKeyboard}>
            <View style={styles.container}>
                <SearchInput search={searchSimilarMovies} />
                {
                    list.length > 0 ?
                        <SearchMoviesList navigation={navigation} list={list} />
                        :
                        <View style={styles.noSearchItems}>
                            <Text>No hay peliculas para mostrar..</Text>
                        </View>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SearchMovie

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    noSearchItems: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        // justifyContent: 'center'
    }
})