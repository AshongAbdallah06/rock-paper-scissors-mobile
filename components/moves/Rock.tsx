import { images } from "@/constants";
import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
	handleClick: (move: string) => void;
}

const Rock: FC<Props> = ({ handleClick }) => {
	return (
		<TouchableOpacity
			onPress={() => handleClick("Rock")}
			className="absolute  bottom-0 right-32"
			activeOpacity={0.8}
		>
			<View className="border-8 border-rock-primary bg-white h-36 w-36 justify-center items-center rounded-full">
				<Image
					source={images.rock}
					resizeMode="contain"
					style={{ height: 250 }}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default Rock;

const styles = StyleSheet.create({});
