import { images } from "@/constants";
import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
	handleClick: (move: string) => void;
}

const Scissors: FC<Props> = ({ handleClick }) => {
	return (
		<TouchableOpacity
			onPress={() => handleClick("Scissors")}
			className="absolute top-0 right-0"
			activeOpacity={0.8}
		>
			<View className="border-8 border-scissors-primary bg-white h-36 w-36 justify-center items-center rounded-full">
				<Image
					source={images.scissors}
					resizeMode="contain"
					style={{ height: 250 }}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default Scissors;

const styles = StyleSheet.create({});
