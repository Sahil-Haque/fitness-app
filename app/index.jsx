import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native-web';


export default function Index() {
    return (
        <View className="flex-1 flex justify-end">
        <StatusBar style="light" />
        <Image className="h-full w-full absolute" source={require('../assets/images/homepage.jpg')} />
        
        <linearGradient
         colors={['transparent', '#18181b']}
         style={{width: wp(100), height: hp(70)}}
         start={{x: 0.5, y:0}}
         end={{x:0.5, y:0.7}}
         className='flex justify-end pb-12 space-y-8'
         >
         <view className='flex items-center'>
            <Text style={{fontSize: hp(5)}} className="text-white font-bold tracking-wide">
               <Text className="text-rose-600"> Welcome </Text> 
            </Text>
         </view>   

         <View>
            <TouchableOpacity
                style={{height: hp(7), width: wp(80)}}
                className="bg-rose-600 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200 "
            >
                <Text  style={{fontSize: hp(3)}} className="text-white font-bold tracking-widest">
                    Get started
                </Text>
            </TouchableOpacity>
         </View>
        </linearGradient>
        </View>

    )
}