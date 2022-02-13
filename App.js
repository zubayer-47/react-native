import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Provider from './app/Provider';
import Home from './app/screens/Home';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import Welcome from './app/screens/Welcome';
// import Query from './app/Query'

export default function App() {
  return (
    <NativeRouter>
      <Provider>
        <View style={styles.container}>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/home/:id' element={<Query />} /> */}
          </Routes>
        </View>
      </Provider>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
