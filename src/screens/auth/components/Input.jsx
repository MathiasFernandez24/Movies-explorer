import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { COLORS } from '../../../theme/colors';

const Input = ({ secureTextEntry = false, value, onchangeText, placeholder, error }) => {
    return (
        <View>

            <View style={styles.container}>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    keyboardType='default'
                    value={value}
                    onChangeText={onchangeText}
                    placeholder={placeholder}
                    style={styles.input}
                    selectionColor="green"
                />
                {
                    !error &&
                    // <Feather name="minus-circle" size={24} color={"red"} />
                    // :
                    <Entypo name="check" size={24} color={"green"} />
                }
            </View>
            <Text style={styles.error}>{error && error}</Text>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%'
    },
    error: {
        color: 'red',
        fontSize: 10,
    },
    input: {
        // backgroundColor: 'yellow',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.acent,
        fontSize: 24,
        marginVertical: 5,
        padding: 5,
        paddingVertical: 10,
    }
})