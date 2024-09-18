import {
	ScrollView,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	useColorScheme,
} from "react-native";
import React, { useState } from "react";

const LoginScreen = ({ navigation }) => {
	const [email, onChangeEmail] = useState("");
	const [password, onChangePassword] = useState("");
	// const [loggedIn, onLogin] = useState(false);
	const colorScheme = useColorScheme();

	return (
		<ScrollView style={styles.container}>
			<Text
				style={[
					styles.headerText,
					colorScheme === "light" ? { color: "#333333" } : { color: "#EDEFEE" },
				]}
			>
				Welcome to Little Lemon
			</Text>
			{/* {loggedIn && (
				<Text
					style={[
						styles.headerText,
						colorScheme === "light"
							? { color: "#333333" }
							: { color: "#EDEFEE" },
					]}
				>
					You are Logged in!
				</Text>
			)} */}
			{/* {!loggedIn && (
				<>
					<Text
						style={[
							styles.regularText,
							colorScheme === "light"
								? { color: "#333333" }
								: { color: "#EDEFEE" },
						]}
					>
						Login to continue{" "}
					</Text>
					<TextInput
						value={email}
						onChangeText={onChangeEmail}
						style={styles.inputBox}
						placeholder={"Email"}
						keyboardType={"email-address"}
					></TextInput>
					<TextInput
						value={password}
						onChangeText={onChangePassword}
						style={styles.inputBox}
						placeholder={"Password"}
						keyboardType={"default"}
						secureTextEntry={true}
					></TextInput>
					<Pressable onPress={() => navigation.navigate('Welcome')} style={styles.button}>
						<Text style={styles.buttonText}>Login</Text>
					</Pressable>
				</>
			)} */}
			<Text
				style={[
					styles.regularText,
					colorScheme === "light" ? { color: "#333333" } : { color: "#EDEFEE" },
				]}
			>
				Login to continue
			</Text>
			<TextInput
				value={email}
				onChangeText={onChangeEmail}
				style={styles.inputBox}
				placeholder={"Email"}
				keyboardType={"email-address"}
			></TextInput>
			<TextInput
				value={password}
				onChangeText={onChangePassword}
				style={styles.inputBox}
				placeholder={"Password"}
				keyboardType={"default"}
				secureTextEntry={true}
			></TextInput>
			<Pressable
				onPress={() => navigation.navigate("Welcome")}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Login</Text>
			</Pressable>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerText: {
		padding: 40,
		fontSize: 30,
		color: "#EDEFEE",
		textAlign: "center",
	},
	regularText: {
		fontSize: 24,
		padding: 20,
		marginVertical: 8,
		color: "#EDEFEE",
		textAlign: "center",
	},
	inputBox: {
		backgroundColor: "#EDEFEE",
		padding: 10,
		margin: 12,
		height: 40,
		borderWidth: 1,
		fontSize: 16,
		borderColor: "#EDEFEE",
	},
	button: {
		fontSize: 22,
		margin: 100,
		marginVertical: 8,
		backgroundColor: "#EE9972",
		borderColor: "#EE9972",
		borderWidth: 2,
		borderRadius: 50,
		padding: 10,
	},
	buttonText: {
		color: "black",
		textAlign: "center",
		fontSize: 25,
	},
});

export default LoginScreen;
