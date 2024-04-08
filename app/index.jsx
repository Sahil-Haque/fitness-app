import { View, Text, Image} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native-web';


export default function Index() {
    return (
        <View className="flex-1 flex justify-end">
        <StatusBar style="light" />
        <Image className="h-full w-full absolute" source={require('../assets/images/homepage.jpg')} />
        </View>
    )
}