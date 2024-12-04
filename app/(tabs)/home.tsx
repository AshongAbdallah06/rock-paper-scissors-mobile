import Gameboard from "@/components/Gameboard";
import RulesModal from "@/components/RulesModal";
import Scoreboard from "@/components/Scoreboard";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
	const [showRules, setShowRules] = useState(false);

	return (
		<SafeAreaView className={`h-full bg-back-primary ${showRules && "bg-black"} `}>
			<ScrollView className={`${!showRules && "pt-20 px-10"}`}>
				<Scoreboard showRules={showRules} />

				<Gameboard showRules={showRules} />

				<RulesModal
					showRules={showRules}
					setShowRules={setShowRules}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
