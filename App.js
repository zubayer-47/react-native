import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Welcome from './app/screens/Welcome';
import Register from './app/screens/Register';
import Login from './app/screens/Login';
import Home from './app/screens/Home'
import Provider from './app/Provider';

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
