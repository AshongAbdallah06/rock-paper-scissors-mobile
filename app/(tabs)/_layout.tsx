import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../../constants";

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
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#FFA001",
				tabBarInactiveTintColor: "#CDCDE0",
				tabBarStyle: {
					backgroundColor: "#161622",
					borderTopWidth: 1,
					borderTopColor: "#23533",
					height: 84,
				},
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							name="Home"
							color={color}
							icon={icons.home}
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
						<TabIcon
							name="Bookmark"
							color={color}
							icon={icons.bookmark}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="create"
				options={{
					title: "Create",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabIcon
							name="Create"
							color={color}
							icon={icons.plus}
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
						<TabIcon
							name="Profile"
							color={color}
							icon={icons.profile}
							focused={focused}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
