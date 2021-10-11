import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from'@expo/vector-icons';

import TourScreen from "./screens/TourScreen";
import HomeScreen from './screens/Home/HomeScreen';
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import MyOrderScreen from "./screens/MyOrderScreen";
import SearchScreen from "./screens/SearchScreen";
import SearchResultScreen from "./screens/SearchResultScreen";
import RestaurantHomeScreen from "./screens/RestaurantHomeScreen";
import MenuScreen from "./screens/RestaurantTabs/MenuScreen";
import MenuProductScreen from "./screens/MenuProductScreen";
import AboutScreen from "./screens/AboutScreen";
import ViewCartScreen from "./screens/ViewCartScreen"
import {Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";


const store = configureStore();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigation
function App() {
  return (
	  <ReduxProvider store={store}>
			<NavigationContainer>
			<Stack.Navigator>
			<Stack.Screen 
						name ="Tour" 
						component={TourScreen} 
						options={{ headerShown: false }}/>
			<Stack.Screen 
					name="Home" 
					component={HomeTab}
					options={{ headerShown: false }} 
						/>
				<Stack.Screen name="Register" component={RegisterScreen} 
					options={{ title: 'Register' }}/>

				<Stack.Screen name="Login" component={LoginScreen} 
					options={{title: 'Login' }}/>
				
				<Stack.Screen name="SearchResultScreen" component={SearchResultScreen} 
					options={{ title: 'Search' }}/>   

				<Stack.Screen name="RestaurantHomeScreen" component={RestaurantHomeScreen} 
						options={{ headerShown: false }} />

				<Stack.Screen name="MenuScreen" component={MenuScreen} 
						options={{ title: 'Menu Screen' }}/>

				<Stack.Screen name="MyOrderScreen" component={MyOrderScreen} 
							options={{ title: 'Orders' }}/>

				<Stack.Screen name="MenuProductScreen" component={MenuProductScreen} 
							options={{ title: 'Products Menu' }}/>

				<Stack.Screen name="ViewCartScreen" component={ViewCartScreen} 
											options={{ title: 'View Cart' }}/>

			</Stack.Navigator>
			</NavigationContainer>
		 </ReduxProvider>
  );
}

// BottomTab Navigation
function HomeTab() {
	return (
	  <Tab.Navigator 
	  		initialRouteName="home"
      		tabBarOptions={{
        		activeTintColor: '#fff',
				activeBackgroundColor: '#FFCC2A',
      		}}>
			<Tab.Screen 
				name="Profile" 
				component={HomeScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: () => <MaterialCommunityIcons 
										name="home" 
										size={24} 
										color={'grey'} />
		}} />
		<Tab.Screen 
				name="Search" 
				component={SearchScreen}
				options={{
					tabBarLabel: 'Search',
					tabBarIcon: () => <MaterialCommunityIcons 
										name="magnify" 
										size={24} 
										color={'grey'}/>
		}} />
		<Tab.Screen 
				name="MyOrderScreen" 
				component={MyOrderScreen}
				options={{
					tabBarLabel: 'Orders',
					tabBarBadge: 0,
					tabBarIcon: () => <MaterialCommunityIcons 
										name="view-list" 
										size={24} 
										color={'grey'}/>
		}} />
		<Tab.Screen 
				name="About" 
				component={AboutScreen}
				options={{
					tabBarLabel: 'About',
					tabBarIcon: () => <MaterialCommunityIcons 
										name="information" 
										size={24} 
										color={'grey'}/>
		}} />
	  </Tab.Navigator>
	);
  }
export default App;