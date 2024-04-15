import { View, Text } from 'react-native';
import React from 'react';
{/* import carousel, {ParallaxImage} from 'react-native-snap-carousel';
 */}
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { sliderImages } from '../constants';

export default function ImageSlider(){
    return(
       <Carousel 
            data={sliderImages}
            loop={true}
            autoplay={true}
            renderItem={ItemCard}
            hasParallaxImages={true}
            sliderWidth={wp(100)}
            firstItem={1}
            autoplayInterval={3000}
            itemWidth={wp(100)-70}
            slideStyle={{display: 'flex', alignItems: 'center'}}
       />
    )
}

const ItemCard = ()=>{
    return(
        <Text> Testing </Text>
    )
}