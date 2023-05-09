import React from 'react';
import {View, Text, Image} from 'react-native';

const temp = 'https://images.ladepeche.fr/api/v1/images/view/63600c1986a82e7a5a29be4b/large/image.jpg?v=2';
const Img_Details = () => {
    return (
        <View>
            <Image resizeMode={'cover'}
                   style={{ width: '100%', height: 300} }
                   source={{uri: temp}}/>
        </View>
    );
};
export default Img_Details;
