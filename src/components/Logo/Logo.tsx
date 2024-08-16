import React from "react"
import { Image, View, Text } from "react-native"
import logo from "../../../assets/img/batman.png"
import {style} from './logoStyle'


export default function Logo(){
    return(
        <View style={style.container} >
            <Text style={style.title} >Key Generator</Text>
            <Image style={style.img} source={logo} />

        </View>
       
    )
}