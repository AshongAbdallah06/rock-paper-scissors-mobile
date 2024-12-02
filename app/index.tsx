import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export default function Index() {
	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full h-full justify-center items-center px-4">
					<Image
						source={images.logo}
						className="w-[130px] h-[84px]"
						resizeMode="contain"
					/>
					<Image
						source={images.cards}
						className="max-w-[380px] w-full h-[300px]"
						resizeMode="contain"
					/>

					<View className="relative mt-5">
						<Text className="text-center text-white text-3xl font-bold">
							Discover Endless Possibilities with
							<Text className="text-secondary-200"> Aora</Text>
						</Text>

						<Image
							source={images.path}
							resizeMode="contain"
							className="w-[106px] h-[15px] absolute -bottom-2 right-[100px]"
						/>
					</View>
					<Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
						Where creativity meets innovation: embark on a journey of limitless
						exploration with Aora
					</Text>

					<CustomButton
						title="Continue with Email"
						handlePress={() => router.push("/sign-in")}
						containerStyles="w-full mt-7"
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
