import React from 'react';
import {View, Text} from 'react-native';
import "./Description_Details.css";

const Description_Details = () => {
    return (
        <View>
            <div className="profile">
                <div className="info">
                    <div className="name"><span>Jean</span><img src="https://static.thenounproject.com/png/3682928-200.png" /></div>
                    <div className="age">Age : 25 ans</div>
                    <div className="race">Race : </div>
                </div>
                <div className="like"><img src="https://static.vecteezy.com/system/resources/previews/001/188/163/original/heart-png.png" /></div>
            </div>
            <div className="description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
                    lacinia nisl, nec ultricies nunc nisl vel mauris. Sed
                    tincidunt, nisl eget ultricies tincidunt, nunc nisl lacinia
                </p>
            </div>
        </View>
    );
};
export default Description_Details;
