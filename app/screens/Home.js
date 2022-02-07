import { useContext, useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, Image } from 'react-native'

import Colors from '../colors'
import { } from 'react-router-native'
import colors from '../colors'
import { Context } from '../Context/Context'

export default function Home() {
    const [name, setName] = useState('Zubayer')
    const {state} = useContext(Context)

    console.log(state)
    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View >
                <Text style={{ fontSize: 25, fontStyle: 'italic', color: colors.black }}>Hello, <Text style={{fontStyle: 'normal', fontWeight: 'bold'}}>{name}</Text></Text>
                <Text style={{ fontSize: 15, marginLeft: 5, color: '#94a3b8', fontStyle: 'italic', }}>What do you want today!</Text>
            </View>
            <Image source={require('../../assets/bg.png')} fadeDuration={800} style={{ width: 40, height: 40, borderRadius: 50 }} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%',
        backgroundColor: Colors.light,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: Colors['slate-100']
    },
    singleInputContainer: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 5,
        
    },
    input: {
        backgroundColor: Colors.light,
        borderWidth: 1,
        borderColor: Colors.gray,
        width: 200,
        borderRadius: 3,
        paddingHorizontal: 5,
    },
    text: {
        color: Colors.dark,
        marginBottom: 3
    },
})
