import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	return (
		<SafeAreaView className=" h-full bg-primary">
			<ScrollView
				contentContainerStyle={{ height: "100%" }}
				className="bg-gradient-to-b from-gradient-bgFrom to-gradient-bgTo"
			>
				<View className="w-full h-full justify-center items-center px-4">
					<Text className="text-white font-extrabold text-6xl text-center">Rock</Text>
					<Text className="text-white font-extrabold text-6xl text-center">Paper</Text>
					<Text className="text-white font-extrabold text-6xl text-center">Scissors</Text>

					<Text className="relative text-white text-xl font-bold mt-7">
						<Text className="text-center text-white text-xl font-bold">
							Get ready to test your reflexes and strategy in this classic battle of
							wits.
						</Text>
					</Text>

					<View className="mt-10">
						<Text className="text-secondary font-psemibold text-3xl mb-5">
							Here's how to play:
						</Text>
						<View className="ml-5">
							<Text className="text-white font-psemibold text-lg">
								✊ Rock crushes Scissors
							</Text>
							<Text className="text-white font-psemibold text-lg">
								✋ Paper covers Rock
							</Text>
							<Text className="text-white font-psemibold text-lg">
								✌️ Scissors cuts Paper
							</Text>
						</View>
					</View>

					<CustomButton
						title="Play Game"
						handlePress={() => router.push("/home")}
						containerStyles="w-[80%] mt-7"
						textStyles
					/>
				</View>
			</ScrollView>

			<StatusBar
				style="light"
				backgroundColor="#161622"
			/>
		</SafeAreaView>
	);
}
