import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TabIcon = ({ color, name, icon, focused }: any) => {
	return (
		<View className="justify-center items-center gap-1 w-20">
			<Image
				source={icon}
				resizeMode="contain"
				tintColor={color}
				className="w-6 h-6"
			/>
			<Text
				className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
				style={{ color }}
			>
				{name}
			</Text>
		</View>
	);
};

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#FFA001",
				tabBarInactiveTintColor: "#CDCDE0",
				tabBarStyle: {
					backgroundColor: "#162941",
					borderTopWidth: 1,
					borderTopColor: "#112533",
					height: 84,
				},
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Play",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<MaterialIcons
							name="sports-esports"
							color={focused ? "#FFA001" : color}
							size={32}
							focused={focused}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="bookmark"
				options={{
					title: "Bookmark",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<MaterialIcons
							name="bookmark"
							color={focused ? "#FFA001" : color}
							size={32}
							focused={focused}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="create"
				options={{
					title: "Leaderboard",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<MaterialIcons
							name="leaderboard"
							color={focused ? "#FFA001" : color}
							size={32}
							focused={focused}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<MaterialIcons
							name="person"
							color={focused ? "#FFA001" : color}
							size={32}
							focused={focused}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
