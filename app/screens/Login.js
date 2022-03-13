import { useContext, useState } from 'react';
import {
	Alert,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View
} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigate } from 'react-router-native';
import Colors from '../colors';
import { Context } from '../Context/Context';
import Authorization from '../Rest/User/Authorization';


export default function Register() {
	let [email, setEmail] = useState('zubayer@gmail.com');
	let [password, setPassword] = useState('zubayer');
	const [focus, setFocus] = useState(false);
	let [isLoading, setLoading] = useState(false)
	const [show, setShow] = useState(false)
	const navigate = useNavigate();

	const { state, dispatch } = useContext(Context);

	const onPress = async () => {
		setLoading(true)
		setShow(true)
		email = email.length >= 10 && email.includes('@') ? email : '';
		password = password.length >= 6 ? password : ''

		if (email && password) {
			try {
				const userData = await Authorization.login({
					email,
					password,
				});
				
				if (userData) {
					dispatch({
						type: 'firstName',
						value: userData.data.firstName,
					});

					setEmail('');
					setPassword('');
					return navigate('/home');
				} else {
					Alert.alert("Wrong Information", "Provide valid information.")
					setLoading(false)
					setShow(false)
				}

			} catch (error) {
				console.log(error);
				setLoading(false)
				setShow(false)
			}
		} else {
			Alert.alert('Wrong Information', 'Please fill up correctly!');
			setLoading(false)
			setShow(false)
		}
	};

	return (
		<View style={styles.container}>
			<View style={{ paddingVertical: focus ? '20%' : '55%' }}>
				<Text
					style={[
						styles.text,
						{
							fontSize: 30,
							marginBottom: 10,
							color: Colors.secondary,
						},
					]}
				>
					Login
				</Text>
				<View style={styles.inputContainer}>
					<View style={styles.singleInputContainer}>
						<Text style={styles.text}>Email</Text>
						<TextInput
							style={styles.input}
							value={email}
							onChangeText={setEmail}
							placeholder='Enter Your Email'
							onFocus={() => setFocus(true)}
							onBlur={() => setFocus(false)}
						/>
					</View>
					<View style={styles.singleInputContainer}>
						<Text style={styles.text}>Password</Text>
						<TextInput
							style={styles.input}
							value={password}
							secureTextEntry={true}
							onChangeText={setPassword}
							placeholder='Enter Your Password (Min 6 chareter)'
							onFocus={() => setFocus(true)}
							onBlur={() => setFocus(false)}
						/>
					</View>
					<View style={styles.singleInputContainer}>
						<TouchableHighlight style={{ marginTop: 5 }}>
							<Button
								mode='contained'
								onPress={onPress}
								dark={true}
								color={Colors.secondary}
								loading={isLoading}
								disabled={isLoading}
							>
								login
							</Button>
						</TouchableHighlight>
					</View>
					{!show ? (
						<View
						style={[
							styles.singleInputContainer,
							{
								flexDirection: 'row',
								marginTop: 10,
								justifyContent: 'center',
							},
						]}
					>
						<Text>Need Your Account!</Text>
						<Text
							style={{ color: Colors.secondary, marginLeft: 5 }}
							onPress={() => navigate('/register')}
						>
							Sign Up
						</Text>
					</View>
					) : <Text />}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.light,
	},
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		borderRadius: 10,
		backgroundColor: Colors['slate-100'],
	},
	singleInputContainer: {
		width: 330,
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	input: {
		backgroundColor: Colors.light,
		borderWidth: 0.4,
		borderColor: Colors.secondary,
		width: '100%',
		borderRadius: 3,
		paddingHorizontal: 5,
		paddingVertical: 5,
	},
	text: {
		color: Colors.dark,
		marginBottom: 3,
	},
});
