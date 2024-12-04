import { images } from "@/constants";
import React, { Dispatch, FC, SetStateAction } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
	showRules: boolean;
	setShowRules: Dispatch<SetStateAction<boolean>>;
}

const RulesModal: FC<Props> = ({ setShowRules, showRules }) => {
	return (
		<>
			{showRules && (
				<View className="absolute min-h-full top-0 bottom-0 left-0 right-0 bg-overlay  justify-center items-center z-10">
					<View className="absolute top-30 bg-white px-8 pb-10 justify-center items-center mx-10 rounded-xl">
						<View className="flex-row w-full justify-between items-center">
							<Text className="text-3xl font-psemibold pt-6 pb-8">Rules</Text>

							<TouchableOpacity onPress={() => setShowRules(false)}>
								<Image
									source={images.close}
									resizeMode="contain"
									className="mr-4"
									style={{ height: 18 }}
								/>
							</TouchableOpacity>
						</View>

						<Image source={images.rules} />
					</View>
				</View>
			)}

			<TouchableOpacity
				className="flex-row justify-center items-center mt-32"
				onPress={() => setShowRules(true)}
			>
				<Text className="text-white text-center border-2 border-gray-500 rounded-lg font-psemibold text-xl w-36  py-2 flex-row justify-center items-center ">
					RULES
				</Text>
			</TouchableOpacity>
		</>
	);
};

export default RulesModal;

const styles = StyleSheet.create({});
