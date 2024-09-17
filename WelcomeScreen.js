import {
	StyleSheet,
	Text,
	ScrollView,
	Image,
	View,
	useColorScheme
} from "react-native";
import React, { useState } from "react";

export default function WelcomeScreen() {
	const colorScheme = useColorScheme();
	return (
		<ScrollView style={[
			styles.container,
			colorScheme === 'light' ? { backgroundColor: '#fff' } : { backgroundColor: '#333333' }
		]}>
			<View style={styles.headerWrapper}>
				<Image
					style={styles.image}
					source={require("./img/logo.png")}
					resizeMode="cover"
					accessible={true}
					accessibilityLabel="Little Lemon Logo"
				/>
				<Text style={[
					styles.headerText,
					colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' }
				]}>Little Lemon</Text>
			</View>
			<Text style={[
				styles.regularText,
				colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' }
			]}>
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
	headerWrapper: {
		flexDirection: "row",
		justifyContent: 'center',
		margin: 10
	},
	headerText: {
		paddingRight: 10,
		paddingLeft: 20,
		paddingTop: 30,
		paddingBottom: 10,
		fontSize: 30,
		textAlign: "center",
		color: "#EDEFEE",
	},
	regularText: {
		textAlign: "center",
		fontSize: 24,
		marginVertical: 8,
		padding: 20,
		color: "#EDEFEE",
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 20
	},
});
