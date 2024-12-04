import { images } from "@/constants";
import React from "react";
import { Image, Text, View } from "react-native";

const Scoreboard = ({ showRules }: { showRules: boolean }) => {
	return (
		<View
			className={`border-4 border-header py-4 pr-4 rounded-lg flex-row items-center justify-between h-28 ${
				showRules && "mt-20 mx-10"
			}`}
		>
			<Image
				source={images.logo}
				resizeMode="contain"
				style={{ height: 70 }}
			/>

			<View className="bg-white justify-center items-center h-full px-4">
				<Text className="text-dark text-xs">SCORE</Text>
				<Text className="text-dark text-4xl font-pbold mt-2">12</Text>
			</View>
		</View>
	);
};

export default Scoreboard;
