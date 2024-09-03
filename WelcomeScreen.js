import {
	StyleSheet,
	Text,
	TextInput,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import React, { useState } from "react";

export default function WelcomeScreen() {
	const [firstName, onChangeFirstName] = useState("");

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS == "ios" ? "padding" : "position"}
		>
			<ScrollView
				indicatorStyle={"white"}
				keyboardDismissMode="on-drag"
			>
				<Text style={styles.headerText}>Welcome to Little Lemon</Text>
				<Text style={styles.regularText}>
					Little Lemon is a charming neighborhood bistro that serves simple food
					and classic cocktails in a lively but casual environment. We would
					love to hear more about your experience with us!
				</Text>
				<TextInput
					value={firstName}
					onChangeText={onChangeFirstName}
					style={styles.inputBox}
					placeholder={"First Name"}
				></TextInput>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerText: {
		textAlign: "center",
		fontSize: 40,
		padding: 30,
		color: "#EDEFEE",
	},
	regularText: {
		textAlign: "center",
		fontSize: 24,
		marginVertical: 8,
		padding: 20,
		color: "#EDEFEE",
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
});
