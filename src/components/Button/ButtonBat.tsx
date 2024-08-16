import { Pressable, Text } from "react-native";
import { style } from "./ButtonBatStyle";
import { InputKey } from "../InputKey/InputKey";
import { useState } from "react";
import generatePass from "../../services/generatePass";
import * as Clipboard from 'expo-clipboard';

export function ButtonBat(){
const [pass,setPass] = useState('')


function handlePass(){
    const password = generatePass()
    setPass(password)
}

async function handleCopy(){
    await Clipboard.setStringAsync(pass)
}

    return(
        <>
         <InputKey pass={pass}/>

        <Pressable style={style.container} onPress={handlePass} >
            <Text style={style.text} >Generate</Text>
        </Pressable>

        <Pressable style={style.container} onPress={handleCopy} >
            <Text style={style.text} >🔑 Copy</Text>
        </Pressable>
        
        </>
    )
}