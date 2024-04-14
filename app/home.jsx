import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImageSlider from '../components/ImageSlider';


{/*
    edges - prevents the background color from overlapping with the top of the screen
*/}

export default function Home(){
    return(
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']} >
       <StatusBar style='dark'></StatusBar>

       {/* Punchline and profile pic image*/}
       <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-neutral-700"
            >
                Ready to 
            </Text>
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-rose-600"
            >
                Workout
            </Text>
        </View>
        {/* iNSERT IMAGE LINK ON LINE 36 BY SOURCE*/}
        <View className="flex justify-center items-center space-y-2">
            <Image 
                source={require('../assets/images/ ')} 
                style={{height: hp(6), width: wp(6)}}
                className="rounded-full" 
                />
            <View 
                className="bg-neutral-200 rounded-full justify-center items-center"
                style={{height: hp(5.5), width: wp(5.5)}}>
            
            </View>
        </View>
       </View>
        
        {/* Image slider section*/}
        <View>
            <ImageSlider>
                
            </ImageSlider>

        </View>


    </SafeAreaView>
    )
}