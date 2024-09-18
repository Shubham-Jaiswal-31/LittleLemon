import { View, StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import MenuItems from "./components/MenuItems";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from './LoginScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function App() {
	return (
		<>
			<NavigationContainer>
				<View style={styles.container}>
					<LittleLemonHeader />
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, color, size }) => {
								let iconName;
								if (route.name === 'Welcome') {
									iconName = focused ? 'home-sharp' : 'home-outline'
								} else if (route.name === 'Login') {
									iconName = 'enter'
								}
								return <Ionicons name={iconName} size={size} color={color} />
							},
							tabBarActiveTintColor: 'tomato',
							tabBarInactiveTintColor: 'grey'
						})}
						initialRouteName="Login">
						<Tab.Screen name="Welcome" options={{ title: 'Home', headerTitleAlign: 'center' }} component={WelcomeScreen} />
						<Tab.Screen name="Login" options={{ title: 'Login', headerTitleAlign: 'center' }} component={LoginScreen} />
					</Tab.Navigator>
				</View>
				<View style={styles.footerContainer}>
					<LittleLemonFooter />
				</View>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#333333",
	},
	footerContainer: {
		backgroundColor: "#333333",
	},
});

export default App;