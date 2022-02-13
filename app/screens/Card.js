import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import colors from "../colors";

function CardComp(props) {
  return (
    <Card style={styles.card} mode="outlined">
      <Card.Cover source={{ uri: props.uri }} />
      <Card.Content style={styles.container}>
        <Title>{props.title}</Title>
        <Paragraph>
          <Title style={{ color: colors.secondary }}>${props.price}</Title>
        </Paragraph>
      </Card.Content>
      <Card.Actions></Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  para: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignContent: "center",
  },
});

export default CardComp;
