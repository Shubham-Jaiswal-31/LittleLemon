import { Text, ScrollView, StyleSheet } from "react-native";
import * as React from "react";

export default function WelcomeScreen() {
	return (
		<ScrollView indicatorStyle={"white"} style={styles.container}>
			<Text style={styles.headerText}>Welcome to Little Lemon</Text>
			<Text style={styles.regularText}>
				Little Lemon is a charming neighborhood bistro that serves simple food
				and classic cocktails in a lively but casual environment. We would love
				to hear more about your experience with us!
			</Text>
		</ScrollView>
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
});
