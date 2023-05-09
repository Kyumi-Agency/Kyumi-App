import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const New_Arrivals = ({ onPress }) => {
    const newData = [
        {
            id: '1',
            image:
                'https://images.ladepeche.fr/api/v1/images/view/63600c1986a82e7a5a29be4b/large/image.jpg?v=2',
        },
        {
            id: '2',
            image:
                'https://img.20mn.fr/2c2xoZqdQhu84Dmhb8ci9Sk/1200x768_le-berger-australien-est-le-chien-prefere-des-francais',
        },
        {
            id: '3',
            image: 'https://lemeilleurpourmonlapin.fr/wp-content/uploads/2022/01/lapin-belier-nain.jpg',
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>News Arrivals</Text>
            <FlatList
                data={newData}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => onPress(item.id)}
                        key={item.id}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: '100%', height: '100%', borderRadius: 8 }}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemContainer: {
        width: 150,
        height:350,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default New_Arrivals;
