import { View, Text, ScrollView } from "react-native";
import * as React from "react";

export default function WelcomeScreen() {
	return (
		<ScrollView indicatorStyle={"white"} style={{ flex: 1 }}>
			<Text
				style={{
					textAlign: "center",
					fontSize: 50,
					padding: 40,
					color: "#EDEFEE",
				}}
			>
				Welcome to Little Lemon
			</Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 38,
					marginVertical: 8,
					padding: 20,
					color: "#EDEFEE",
				}}
			>
				Little Lemon is a charming neighborhood bistro that serves simple food
				and classic cocktails in a lively but casual environment. We would love
				to hear more about your experience with us!
			</Text>
		</ScrollView>
	);
}
