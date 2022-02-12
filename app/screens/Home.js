import { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
// import { } from 'react-router-native'

import Card from './Card'
import Colors from '../colors'
import { Context } from '../Context/Context'

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("")
    const {state, dispatch} = useContext(Context)

    const handleFilter = () => {
        return state.data.filter(recipe => recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    console.log(state);

    // useEffect( () => {
    //     setTimeout(async() => {
    //         dispatch({
    //             type: "search",
    //             value: searchTerm
    //         })
    //     }, 1000);
    // }, [searchTerm])
    
    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View >
                <Text style={{ fontSize: 25, fontStyle: 'italic', color: Colors.black }}>Hello, <Text style={{fontStyle: 'normal', fontWeight: 'bold'}}>{state.name}</Text></Text>
                <Text style={{ fontSize: 15, marginLeft: 5, color: '#94a3b8', fontStyle: 'italic', }}>What do you want today!</Text>
            </View>
            <Image source={require('../../assets/bg.png')} fadeDuration={800} style={{ width: 40, height: 40, borderRadius: 50 }} />
        </View>

        <View style={styles.singleInputContainer}>
            <TextInput
                style={styles.input}
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholder="Search Foods..."
            />
        </View>

        {state.loading ? (
            <Text style={{textAlign: 'center'}}>Loading...</Text>
        ) : handleFilter().length ? handleFilter().map(item => (
            <Card
                key={item.idMeal} 
                title={item.strMeal}
                uri={item.strMealThumb}
                price={item.price}
            />
        )) : (
            <Text style={{textAlign: 'center'}}>Food Doesn't Available Yet. Cooming Soon</Text>
        )}
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
    input: {
        backgroundColor: Colors.light,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 3,
        paddingHorizontal: 10,
        padding: 5,
    },
    item: {

    },
    singleInputContainer: {
        width: '100%',
        paddingHorizontal: 15,
        marginVertical: 30  
    },
    text: {
        color: Colors.dark,
        marginBottom: 3
    },
})
