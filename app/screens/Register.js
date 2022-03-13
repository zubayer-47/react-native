import { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { Button, IconButton } from 'react-native-paper'
import { useNavigate } from 'react-router-native'
import Colors from '../colors'
import Authorization from '../Rest/User/Authorization'


export default function Register({ }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const [details, setDetails] = useState('')
    const [focus, setFocus] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const navigate = useNavigate()

    async function onPress() {
        email = email.length >= 10 && email.includes('@') ? email : '';
        password = password.length >= 6 ? password : ''

        if (!password) {
            setLoading(false);
            setDisabled(false)
            Alert.alert("Wrong Password!", "Required and Password should be 6 character at least!");
        }

        if (!email) {
            setLoading(false);
            setDisabled(false)

            Alert.alert("Wrong Email!", "Required and Email should have '@' character with 10 character at least!")
            return;
        }

        if (firstName && lastName && details) {
            setLoading(true)
            setDisabled(true)
            try {
                const singleData = {
                    firstName,
                    lastName,
                    email,
                    password,
                    details
                }

                const res = await Authorization.register(singleData)

                if (res) {
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPassword('')
                    setDetails('')

                    return navigate('/login')
                }

            } catch (error) {
                console.log(error);
                setLoading(false);
                setDisabled(false)
            }
        } else {
            Alert.alert('Error', 'Fields are required!')
            setLoading(false);
            setDisabled(false)
        }
    }

    const singleInputContainerOnFocus = {
        paddingVertical: 5,
        width: 330,
        paddingHorizontal: 15,
    }

    return (
        <View style={styles.container}>
            <View style={{ top: focus ?  '12%' : '8%', left: '-43%' }}>
                <IconButton 
                    icon='login'
                    color={Colors.secondary}
                    onPress={() => navigate('/login')}
                    disabled={disabled}
                />
            </View>
            <View style={{ paddingVertical: focus ? '4%' : '30%', }}>
                <Text style={[styles.text, { fontSize: 30, marginBottom: 10, alignSelf: 'center', color: Colors.secondary }]}>Sign up</Text>
                <View style={styles.inputContainer}>
                    <View style={focus ? singleInputContainerOnFocus : styles.singleInputContainer}>
                        <Text style={styles.text}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            value={firstName}
                            onChangeText={setFirstName}
                            placeholder='Enter Your First Name'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            disableFullscreenUI={isLoading}
                        />
                    </View>
                    <View style={focus ? singleInputContainerOnFocus : styles.singleInputContainer}>
                        <Text style={styles.text}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            value={lastName}
                            onChangeText={setLastName}
                            placeholder='Enter Your Last Name'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            disableFullscreenUI={isLoading}
                        />
                    </View>
                    <View style={focus ? singleInputContainerOnFocus : styles.singleInputContainer}>
                        <Text style={styles.text}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Enter Your Email Address'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            disableFullscreenUI={isLoading}
                        />
                    </View>
                    <View style={focus ? singleInputContainerOnFocus : styles.singleInputContainer}>
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder='Enter Your Password'
                            secureTextEntry={true}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            disableFullscreenUI={isLoading}
                        />
                    </View>
                    <View style={focus ? singleInputContainerOnFocus : styles.singleInputContainer}>
                        <Text style={styles.text}>Address</Text>
                        <TextInput
                            style={styles.input}
                            value={details}
                            onChangeText={setDetails}
                            placeholder='Enter Your Address'
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            disableFullscreenUI={isLoading}
                        />
                    </View>
                    <View style={focus ? singleInputContainerOnFocus : styles.singleInputContainer}>
                        <TouchableHighlight style={{ marginTop: 5 }}>
                            <Button mode='contained' dark={true} onPress={onPress} color={Colors.secondary} disabled={isLoading} loading={isLoading}>
                                Register
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
    singleInputContainerOnFocus: {
        paddingVertical: 5
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
