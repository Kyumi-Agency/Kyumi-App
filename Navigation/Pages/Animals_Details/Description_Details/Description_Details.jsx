import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Description_Details = ({animal}) => {
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const [liked, setLiked] = useState(false);
    const handleLikePress = () => {
        setLiked(!liked);
    };
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                    <View style={styles.name}>
                        <Text style={styles.nameTxt}>{animal.nom}</Text>
                        <Image source={{uri: 'https://static.thenounproject.com/png/3682928-200.png'}} style={styles.nameImg} />
                        <View style={styles.likeContainer}>
                            <TouchableOpacity onPress={handleLikePress}>
                                <Image
                                    source={{  uri: liked ? 'https://cdn-icons-png.flaticon.com/512/1077/1077086.png' : 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }}
                                    style={styles.like}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.txt}>{animal.age} ans</Text>
                    <Text style={styles.txt}>Race : {animal.race}</Text>

            </View>
            <View style={styles.description}>
                <Text numberOfLines={showMore ? undefined : 4}>
                    {animal.description}
                </Text>
                {!showMore && (
                    <TouchableOpacity onPress={toggleShowMore} style={styles.seeMoreButton}>
                        <Text style={styles.seeMoreButtonText}>Voir plus</Text>
                    </TouchableOpacity>
                )}
                {showMore && (
                    <TouchableOpacity onPress={toggleShowMore} style={styles.seeMoreButton}>
                        <Text style={styles.seeMoreButtonText}>Voir moins</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        top: -40,
    },
    profile: {
        display: 'flex',
        width: '80%',
        borderRadius: 15,
        backgroundColor: '#c18f6a',
        padding: 15,
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 20,
    },
    nameTxt: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    likeContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    like: {
        width: 25,
        height: 25,
    },
    nameImg: {
        width: 20,
        height: 20,
        marginLeft : 10,
    },
    txt: {
        fontSize: 16,
        color: 'white',
        fontStyle: 'italic',
    },
    description: {
        width: '80%',
        padding: 10,
    },
    seeMoreButton: {
        marginTop: 10,
    },
    seeMoreButtonText: {
        color: '#447234',
        fontWeight: 'bold',

    },
});

export default Description_Details;
