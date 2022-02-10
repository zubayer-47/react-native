import { useRef, useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-paper'

import Colors from '../colors'
import { useNavigate } from 'react-router-native'
import axios from 'axios'

export default function Register({  }) {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [address, setAddress] = useState('')
    let [focus, setFocus] = useState(false)

    // refs
    const firsNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const addressRef = useRef();

    const navigate = useNavigate()

    const [submitData, setSubmitData] = useState([])

    async function onPress() {
        firstName = firstName.length ? firstName : ''
        lastName = lastName.length ? lastName : ''
        email = email.length ? email : ''
        password = password.length ? password : ''
        address = address.length ? address : ''
        
        if (firstName, lastName, email, password, address) {
            try {
                const singleData = {
                    firstName,
                    lastName,
                    password,
                    email,
                    address
                }

                await axios.post('http://localhost:5000/api/register', singleData)
                
                setSubmitData([singleData, ...submitData])
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
                setAddress('')
                return navigate('/login')
            } catch (error) {
                console.log(error);
            }
        } else {
            Alert.alert('Wrong Crendentials', 'Fields are required!')
        }

    }

    return (
        <View style={styles.container}>
            <View style={{ top: focus ? '11%' : '10%', left: '-35%' }}>
                <TouchableOpacity>
                    <Button mode='contained' color={Colors.secondary} onPress={() => navigate('/login')}>
                        login
                    </Button>
                </TouchableOpacity>
            </View>
            <View style={{ paddingVertical: focus ? '11%' : '30%', }}>
                <Text style={[styles.text, { fontSize: 30, marginBottom: 10, alignSelf: 'center', color: Colors.secondary }]}>Sign up</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.singleInputContainer}>
                        <Text style={styles.text}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            value={firstName}
                            onChangeText={setFirstName}
                            placeholder='Enter Your First Name'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            ref={firsNameRef}
                        /> 
                    </View>
                    <View style={styles.singleInputContainer}>
                        <Text style={styles.text}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            value={lastName}
                            onChangeText={setLastName}
                            placeholder='Enter Your Last Name'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            ref={lastNameRef}
                            />   
                    </View>
                    <View style={styles.singleInputContainer}>
                        <Text style={styles.text}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Enter Your Email Address'
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
                            onChangeText={setPassword}
                            placeholder='Enter Your Password'
                            secureTextEntry={true}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            ref={passRef}
                            />   
                    </View>
                    <View style={styles.singleInputContainer}>
                        <Text style={styles.text}>Address</Text>
                        <TextInput
                            style={styles.input}
                            value={address}
                            onChangeText={setAddress}
                            placeholder='Enter Your Address'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            ref={addressRef}
                            />   
                    </View>
                    <View style={styles.singleInputContainer}>
                        <TouchableHighlight style={{marginTop: 5}}>
                                <Button mode='contained' onPress={onPress} color={Colors.secondary}>
                                    Sign Up
                                </Button>
                        </TouchableHighlight>
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
        backgroundColor: Colors['slate-100']
    },
    singleInputContainer: {
        width: 330,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    input: {
        backgroundColor: Colors.light,
        borderWidth: .5,
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
