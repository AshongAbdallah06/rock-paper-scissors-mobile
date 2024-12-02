import { icons } from "@/constants";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }: any) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className="text-base text-gray-100 font-pmedium">{title}</Text>

			<View className="relative w-full">
				<TextInput
					className="border-2 border-black-200 h-16 px-4 bg-black-100 rounded-2xl text-center text-white font-psemibold text-base w-full pr-12 focus:border-2 focus:border-secondary"
					value={value}
					placeholder={placeholder}
					onChangeText={handleChangeText}
					placeholderTextColor="#7B7B8B"
					secureTextEntry={title === "Password" && !showPassword}
				/>

				{title === "Password" && (
					<TouchableOpacity
						onPress={() => setShowPassword(!showPassword)}
						className="absolute right-4 top-1/2 -translate-y-1/2"
					>
						<Image
							source={showPassword ? icons.eyeHide : icons.eye}
							className="w-6 h-6"
							resizeMode="contain"
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default FormField;
