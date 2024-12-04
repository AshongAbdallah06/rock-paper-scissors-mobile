import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const Signup = () => {
	const [form, setForm] = useState({ email: "", username: "", password: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const formSubmit = () => {};

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View className="w-full justify-center min-h-[85vh] px-4 my-6">
					<Image
						source={images.rock}
						resizeMode="contain"
						className="w-[115px] h-[35px]"
					/>

					<Text className="text-3xl text-white text-semibold mt-10 t font-psemibold">
						Sign up to Aora
					</Text>

					<FormField
						title="Username"
						value={form.username}
						handleChangeText={(e: any) => setForm({ ...form, username: e })}
						otherStyles="mt-10"
					/>

					<FormField
						title="Email"
						value={form.email}
						handleChangeText={(e: any) => setForm({ ...form, email: e })}
						otherStyles="mt-7"
						keyBoardType="email-address"
					/>

					<FormField
						title="Password"
						value={form.password}
						handleChangeText={(e: any) => setForm({ ...form, password: e })}
						otherStyles="mt-7"
					/>

					<CustomButton
						title="Sign up"
						handlePress={formSubmit}
						containerStyles="mt-7"
						isLoading={isSubmitting}
					/>

					<View className="justify-center pt-5 flex-row gap-2">
						<Text className="text-lg text-gray-100 font-pregular">
							Already have an account?
						</Text>
						<Link
							href="/sign-in"
							className="text-lg font-psemibold text-secondary"
						>
							Sign in
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Signup;
