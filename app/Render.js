import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";
import { Context } from "./Context/Context";
import Card from "./screens/Card";

export default function Render() {
  const { state, dispatch } = useContext(Context);

  console.log("render");

  const handleFilter = () => {
    return state.data.filter((recipe) =>
      recipe.strMeal.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  };

  console.log(state);

  return (
    <ScrollView>
      {state.loading ? (
        <Text style={{ textAlign: "center" }}>Loading...</Text>
      ) : handleFilter().length ? (
        handleFilter().map((item) => (
          <Card
            key={item.idMeal}
            title={item.strMeal}
            uri={item.strMealThumb}
            price={item.price}
          />
        ))
      ) : (
        <Text style={{ textAlign: "center" }}>
          Food Doesn't Available Yet. Cooming Soon
        </Text>
      )}
    </ScrollView>
  );
}
