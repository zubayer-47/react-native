import React, { useContext, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigate, useParams } from "react-router-native";
import colors from "../colors";
import { Context } from "../Context/Context";

export default function Order() {
    const navigate = useNavigate()
    const [isLoading, setLoading] = useState(false)
  const params = useParams();
  const { state } = useContext(Context);
  

  const singleItem = state.data.find((item) => item._id === params.id);

  const onPress = () => {
      setLoading(true)
    Alert.alert("Order Status", "Your Order Success! We'll Deliver it within Few Moments")

    navigate('/home')
  };

  const { strMealThumb, price, strMeal } = singleItem;
  return (
    <View style={styles.container}>
      <Image
        source={{
            uri: strMealThumb,
            cache: 'only-if-cached'
          }}
        style={styles.img}
      />

      <View style={styles.detailsWrapper}>
        <Text style={styles.title}>{strMeal}</Text>
        <Text style={{ color: "#ccc" }}>Only Today This Food Offer</Text>

        <Text style={styles.price}>TK. {price}</Text>
      </View>

      <Button
        mode="contained"
        color={colors.secondary}
        onPress={onPress}
        style={styles.btn}
        loading={isLoading}
        disabled={isLoading}
      >
        Order Now
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "90%",
    alignSelf: "center",
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
    height: 300,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
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
