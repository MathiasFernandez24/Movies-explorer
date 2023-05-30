import { TouchableWithoutFeedback, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { login, signUp } from '../../reduxRTK/slices/AuthSilce'
import { schemaEmail, schemaPassword } from '../../Utils/ValidateSchemas'
import Input from './components/Input'

const Auth = () => {
    const [isRegistered, setIsRegistered] = useState(true)
    const [email, setEmail] = useState("")
    const [errorEmail, setErrorEmail] = useState("Campo obligatorio")
    const [password, setPassword] = useState("")
    const [errorPassword, setErrorPassword] = useState("Campo obligatorio")
    const [confirmPassword, setConfirmPassword] = useState("")
    const errorLogin = useSelector(state => state.auth.error)
    const dispatch = useDispatch()

    const closeKeyboard = () => {
        Keyboard.dismiss()
    }

    const passwordCoincidende = password != confirmPassword || confirmPassword == "" ? "No coinciden los password" : ""

    const onChangeEmail = (value) => {
        setEmail(value)
        const validateEmail = schemaEmail.validate({ email: value })
        validateEmail.error ?
            setErrorEmail(validateEmail.error?.message)
            :
            setErrorEmail(false)
    }

    const onChangePassword = (value) => {
        setPassword(value)
        const validatePassword = schemaPassword.validate({ password: value })
        validatePassword.error ?
            setErrorPassword(validatePassword.error?.message)
            :
            setErrorPassword(false)
    }

    const onChangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }



    const signUpOrLogIn = () => {
        if (isRegistered) {
            if (!errorEmail && !errorPassword) {
                console.log("DISPATCH");
                dispatch(login({
                    email: email,
                    password: password
                }))
            }
        } else {
            if (password == confirmPassword && !errorEmail && !errorPassword) {
                dispatch(signUp({
                    email: email,
                    password: password
                }))
            } else {
                console.log("ERROR LOGICA LOGIN");
            }
        }
    }

    const handleIsRegistered = () => {
        setIsRegistered(prevState => !prevState)
    }

    return (
        <TouchableWithoutFeedback onPress={closeKeyboard}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.headerTitle}>Movies Explorer</Text>
                    <View style={styles.formContainer}>
                        <Input value={email} onchangeText={onChangeEmail} placeholder={"Email"} error={errorEmail} />
                        <Input value={password} onchangeText={onChangePassword} placeholder={"Password"} error={errorPassword} secureTextEntry={true} />

                        {/* <TextInput secureTextEntry={true} value={password} onChangeText={(value) => setPassword(value)} placeholder='Password' style={styles.input} /> */}

                        {!isRegistered &&
                            <Input value={confirmPassword} onchangeText={onChangeConfirmPassword} placeholder={"Confirm Password"} error={passwordCoincidende} secureTextEntry={true} />}
                        <TouchableOpacity style={styles.buttonLog} onPress={signUpOrLogIn}>
                            <Text >{isRegistered ? "Login" : "Sign Up"}</Text>
                        </TouchableOpacity>
                        <Text style={styles.error}>{errorLogin}</Text>
                    </View>
                    <TouchableOpacity onPress={handleIsRegistered}>
                        <Text style={styles.registerText}>{isRegistered ? "No tienes cuenta? Registrate!" : "Ya tienes cuenta? inicia sesion!"}</Text>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Auth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50

    },
    inputContainer: {
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        padding: 10,
        paddingVertical: 30,
        borderRadius: 10,
        backgroundColor: COLORS.primary
    },
    headerTitle: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        width: 30,
        backgroundColor: COLORS.tertiary,
        borderRadius: 5,
        padding: 3,
    },
    buttonLog: {
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        width: '90%',
        backgroundColor: COLORS.tertiary,
        borderRadius: 5,
        padding: 5,
        alignSelf: 'center',
        marginTop: 20,

    },
    formContainer: {
        marginTop: 20,
    },
    input: {
        marginVertical: 5,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.acent
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
    registerText: {
        color: 'grey',
        textDecorationLine: 'underline',
        alignSelf: 'flex-end'
    }
})