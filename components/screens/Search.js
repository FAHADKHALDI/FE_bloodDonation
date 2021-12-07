import React, { useState } from "react";
import { View, Text } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import SearchRequestList from "../Search/SearchRequestList"

export default function Search({ navigation }) {
	const [query, setQuery] = useState("");
	return (
		<View
			style={{
				backgroundColor: "#0f1010",
				height: "100%",
				width: "100%",
				paddingTop: 50,
			}}
		>
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
					placeholder="Blood Type"
					placeholderTextColor="#e7e7e7"
					style={{ fontSize: 15, color: "white", paddingHorizontal: 5 }}
				/>
			</View>
			<SearchRequestList query={query} navigation={navigation} />
		</View>
	);
}






// const Search = () => {
//     const [query, setQuery] = useState("");
//     return (
        
//         <View>
//             <TextInput
//             onChangeText={(value) => setQuery(value)}
//             placeholder="Blood Type!"
//             />
//             <SearchRequestList  query={query} navigation={navigation} />

//         </View>
//     )
// }

// export default Search
