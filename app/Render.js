import React, { useContext } from "react";
import { ScrollView, Text } from "react-native";
import { Context } from "./Context/Context";
import Card from "./screens/Card";

export default function Render() {
  const { state, dispatch } = useContext(Context);

  const handleFilter = () => {
    return state.data.filter((recipe) =>
      recipe.strMeal.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  };

  if (!handleFilter().length) {
    return (
      <Text style={{ textAlign: "center" }}>
          Food Doesn't Available Yet. Cooming Soon
        </Text>
    )
  }

  return (
    <ScrollView>
      {state.loading ? (
        <Text style={{ textAlign: "center" }}>Loading...</Text>
      ) : (
        handleFilter().map((item) => (
          <Card
            key={item.idMeal}
            id={item._id}
            title={item.strMeal}
            uri={item.strMealThumb}
            price={item.price}
          />
        ))
      )}
    </ScrollView>
  );
}
