import React from "react";
import { View } from 'react-native'
import { TextInput } from "react-native-gesture-handler";


export default function SearchBar({setQuery}) {

	
	return (

			<View
				style={{
					padding: 10,
					backgroundColor: "#000",
					margin: 10,
					borderRadius: 30,
					borderWidth: 1,
					borderColor: "#000",
				}}
			>
				<TextInput
					onChangeText={(value) => setQuery(value)}
					placeholder="Search for Blood Type!"
					placeholderTextColor="#e7e7e7"
					style={{ fontSize: 15, color: "white", paddingHorizontal: 5 }}
				/>
			</View>
	);
}
