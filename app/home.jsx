import { View, Text, Dimensions, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
        


{/*
    edges - prevents the background color from overlapping with the top of the screen
*/}

{/* list of images for image slider  */}
     {/* const data= [
    {id: 1, title: 'BMI tracker'},
    {id: 2, title: 'Calorie tracker'},
    {id: 3, title: 'Injuries'},
    {id: 4, title: 'Workout planner'}
]*/}



{/* returns the name of each image within the image slider */}
        {/* const _renderItem = ({item, index}) => {
    return <Text> {item.title} </Text>
}*/}



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
                source={require('../assets/images/homepage.jpg')}                
                style={{height: hp(6), width: wp(6)}}
                className="rounded-full" 
            />
        </View>
       </View>
        
        {/* Image slider section*/}
        {/*    <View>
           <Carousel 
                data={data}
                renderItem={_renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                />

        </View>*/}

        {/* */}
        {/* */}
        {/* */}
        {/* */}


     


    </SafeAreaView>
    )
}