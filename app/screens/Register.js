import { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigate } from 'react-router-native'
import Colors from '../colors'
import Authorization from '../Rest/User/Authorization'


export default function Register({  }) {
    const [firstName, setFirstName] = useState('js')
    const [lastName, setLastName] = useState('zubayer')
    const [email, setEmail] = useState('zubayer@zubayer.com')
    const [password, setPassword] = useState('js123456')
    const [details, setDetails] = useState('js')
    const [focus, setFocus] = useState(false)

    const navigate = useNavigate()

    async function onPress() {
        if (firstName && lastName && email && password && details) {
            try {
                const singleData = {
                    firstName,
                    lastName,
                    email,
                    password,
                    details
                }
                
                const res = await Authorization.register(singleData)

                if (!!res) {
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPassword('')
                    setDetails('')

                    return navigate('/login')
                }
                
            } catch (error) {
                console.log(error);
            }
        } else {
            Alert.alert('Error', 'Fields are required!')
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
                            />   
                    </View>
                    <View style={styles.singleInputContainer}>
                        <Text style={styles.text}>Address</Text>
                        <TextInput
                            style={styles.input}
                            value={details}
                            onChangeText={setDetails}
                            placeholder='Enter Your Address'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
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
