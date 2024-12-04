import Paper from "@/components/moves/Paper";
import Rock from "@/components/moves/Rock";
import Scissors from "@/components/moves/Scissors";
import { images } from "@/constants";
import React from "react";
import { Image, View } from "react-native";

const Gameboard = ({ showRules }: { showRules: boolean }) => {
	const handleClick = (move: string) => {
		alert("You clicked " + move);
	};

	return (
		<View className={`mt-20 w-full min-h-[30vh] relative ${showRules && "px-10"}`}>
			<Image
				source={images.triangle}
				className="w-full mt-20 absolute"
				resizeMode="contain"
				style={{ height: 200 }}
			/>

			<View className="h-[300px] relative">
				<Paper handleClick={handleClick} />

				<Scissors handleClick={handleClick} />

				<Rock handleClick={handleClick} />
			</View>
		</View>
	);
};

export default Gameboard;
