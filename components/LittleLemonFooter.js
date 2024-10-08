import { View, Text, StyleSheet } from "react-native";
import * as React from "react";

export default function LittleLemonFooter() {
	return (
		<View style={styles.container}>
			<Text style={styles.footerText}>
				All rights reserved by Little Lemon, 2024{" "}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#EE9972",
		marginBottom: 20,
	},
	footerText: {
		fontSize: 18,
		color: "black",
		textAlign: "center",
		fontStyle: "italic",
	},
});
