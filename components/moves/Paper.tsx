import { images } from "@/constants";
import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
	handleClick: (move: string) => void;
}

const Paper: FC<Props> = ({ handleClick }) => {
	return (
		<TouchableOpacity
			onPress={() => handleClick("Paper")}
			className="absolute top-0"
			activeOpacity={0.8}
		>
			<View className="border-8 border-paper-primary bg-white h-36 w-36 justify-center items-center rounded-full">
				<Image
					source={images.paper}
					resizeMode="contain"
					style={{ height: 250 }}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default Paper;

const styles = StyleSheet.create({});
