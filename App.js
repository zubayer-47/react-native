import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Provider from "./app/Provider";
import Home from "./app/screens/Home";
import Login from "./app/screens/Login";
import Order from './app/screens/Order';
import Register from "./app/screens/Register";
import Welcome from './app/screens/Welcome';

export default function App() {
  return (
    <NativeRouter>
      <Provider>
        <View style={styles.container}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/:id" element={<Order />} />
          </Routes>
        </View>
      </Provider>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
