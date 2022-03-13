import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import colors from '../colors';

export default function Welcome() {
    const navigate = useNavigate()
  return (
    <ImageBackground source={require('../../assets/bg-burger.jpg')} style={[styles.container]}>
        <View style={styles.container}>
            <View style={{marginTop: 10}}>
              <Text style={styles.title}>Foodvalley</Text>
              <Text style={styles.subTitle}>Welcome to Our Service</Text>
            </View>
          <TouchableOpacity style={{width: '100%'}}>
            <View style={styles.buttonContainer}>
              <Button mode='contained' color='#047857' onPress={() => navigate('/login')}>
                Get started
              </Button>
            </View>
          </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginTop: '10%'
  },
  title: {
    alignSelf: 'center',
    fontSize: 28,
    letterSpacing: 3,
    color: colors['slate-100'],
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subTitle: {
    paddingTop: 5,
    alignSelf: 'center',
    fontSize: 18,
    letterSpacing: 3,
    color: colors['stale-200'],
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  buttonContainer: {
    width:  '90%',
    alignSelf: 'center',
  },
});
