import axios from 'axios'
import { useContext, useRef, useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigate } from 'react-router-native'

import Colors from '../colors'
import { Context } from '../Context/Context'

export default function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const [focus, setFocus] = useState(false)
    const navigate = useNavigate()

    const {state, dispatch} = useContext(Context)

    async function onPress() {
        email = email.length ? email : ''
        // password = password.length >= 6 ? password : ''

        if (email && password) {
            try {
                const res = await axios.post('http://192.168.43.115:5000/api/login', {
                    email,
                    password
                }, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })    

                console.log(res);
                dispatch({
                    type: "email",
                    value: email
                })

                setEmail('')
                setPassword('')
                return navigate('/home')
            } catch (error) {
                // console.log(error)
                console.log(error.message);
            }
        } else {
            Alert.alert('Wrong Crendentials', 'Fields are required!')
        }
    }

    return (
            <View style={styles.container}>
            <View style={{ paddingVertical: focus ? '33%' : '55%', }}>
                <Text style={[styles.text, { fontSize: 30, marginBottom: 10, color: Colors.secondary }]}>Login</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.singleInputContainer}>
                        <Text style={styles.text}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Enter Your Email'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            ref={emailRef}
                        /> 
                    </View>
                    <View style={styles.singleInputContainer}>
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            placeholder='Enter Your Password'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            ref={passwordRef}
                            />   
                    </View>
                    <View style={styles.singleInputContainer}>
                        <TouchableHighlight style={{marginTop: 5}}>
                            {/* <Button onPress={onPress} color={colors.secondary} title='Sign In' /> */}
                            <Button mode='contained' onPress={onPress} color={Colors.secondary}>
                                Sign In
                            </Button>
                        </TouchableHighlight>
                    </View>
                    <View style={[styles.singleInputContainer, { flexDirection: 'row', marginTop: 10, justifyContent: 'center' }]}>
                        <Text>Need Your Account!</Text>
                        <Text style={{color: Colors.secondary, marginLeft: 5}} onPress={() => navigate('/register')}>Sign Up</Text>
                    </View>
                </View>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: Colors['slate-100'],
    },
    singleInputContainer: {
        width: 330,
        paddingHorizontal: 15,
        paddingVertical: 10,
        
    },
    input: {
        backgroundColor: Colors.light,
        borderWidth: .4,
        borderColor: Colors.secondary,
        width: '100%',
        borderRadius: 3,
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    text: {
        color: Colors.dark,
        marginBottom: 3
    },
})
