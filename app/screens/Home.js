import { useContext, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { useNavigate } from "react-router-native";
import Colors from "../colors";
import { Context } from "../Context/Context";
import Render from "../Render";
import Authorization from "../Rest/User/Authorization";

export default function Home() {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const res = await Authorization.data();

        if (res.length) {
          dispatch({
            type: "Data",
            value: res
          })
        }
      } catch (error) {
        console.log(error);
      }
    })();

    const timeoutId = setTimeout(() => {
      dispatch({
        type: "loading",
        value: false,
      });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleSearch = text => {
    dispatch({
      type: "search",
      value: text
    })
  }

  const handleLogOut = () => {
    return navigate('/')
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text
            style={{ fontSize: 25, fontStyle: "italic", color: Colors.black }}
          >
            Hello,
            <Text style={{ fontStyle: "normal", fontWeight: "bold" }}>
              {state.name}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 5,
              color: "#94a3b8",
              fontStyle: "italic",
            }}
          >
            What do you want today!
          </Text>
        </View>
        <Button mode='contained' style={{ width: "25%" }} color={Colors.secondary} dark={true} onPress={handleLogOut}>
        logout
        </Button>
      </View>

      <View style={styles.singleInputContainer}>
        <TextInput
          style={styles.input}
          value={state.searchTerm}
          onChangeText={handleSearch}
          placeholder="Search Foods..."
        />
      </View>

      <Render />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
    backgroundColor: Colors.light,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: Colors["slate-100"],
  },
  input: {
    backgroundColor: Colors.light,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 3,
    paddingHorizontal: 10,
    padding: 5,
  },
  singleInputContainer: {
    width: "100%",
    paddingHorizontal: 15,
    marginVertical: 30,
  },
  text: {
    color: Colors.dark,
    marginBottom: 3,
  },
});
