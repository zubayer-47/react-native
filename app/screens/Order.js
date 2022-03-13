import React, { useContext, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { useNavigate, useParams } from "react-router-native";
import colors from "../colors";
import { Context } from "../Context/Context";
import Authorization from "../Rest/User/Authorization";

export default function Order() {
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)
  const params = useParams();
  const { state } = useContext(Context);

  const singleItem = state.data.find((item) => item._id === params.id);

  const onPress = async () => {
    
    try {
      const res = await Authorization.order(singleItem);
      
      if (res) {
          setLoading(true)
          
          setTimeout(() => {
            Alert.alert("Contact", "Cash on delivery, For emargency call '01708567056'")
          }, 100);
  
          Alert.alert("Order Status", "Your Order Success! We'll Deliver it within Few Moments")

          return navigate('/home')
        }
        
      } catch (error) {
        setLoading(false)
        console.log(error.message);
      }

  };

  const { strMealThumb, price, strMeal } = singleItem;
  return (
    <View style={{ flex: 1 }}>
      <IconButton 
          icon='logout'
          color={colors.secondary}
          onPress={() => navigate('/home')}
          style={{top:60,alignSelf: 'flex-end'}}

      />
    <View style={styles.container}>
      <Image
        source={{
          uri: strMealThumb,
        }}
        style={styles.img}
        />

      <View style={styles.detailsWrapper}>
        <Text style={styles.title}>{strMeal}</Text>
        <Text style={{ color: "#ccc" }}>Only Today This Food Offer</Text>

        <Text style={styles.price}>TK. {price}</Text>
      </View>

      <Button
        style={styles.btn}
        mode='contained'
        onPress={onPress}
        dark={true}
        color={colors.secondary}
        loading={isLoading}
        disabled={isLoading}
        >
        Order Now
      </Button>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 33
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: "10%",
    paddingVertical: 10,
  },
  detailsWrapper: {
    alignItems: "center",
    borderRadius: 5,
  },
  img: {
    width: "100%",
    height: 280,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginVertical: 20
  },
  price: {
    marginTop: 20,
    fontSize: 20,
    color: colors.secondary,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
