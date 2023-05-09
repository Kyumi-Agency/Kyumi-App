import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <TextInput
            style={styles.searchInput}
            placeholder="🔍 Rechercher"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            onSubmitEditing={handleSearch}
        />
    );
};

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 10,
        width: "90%",
        alignSelf: "center",
    },
});

export default SearchBar;