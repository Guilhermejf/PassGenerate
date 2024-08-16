import React from "react"
import { TextInput } from "react-native"
import {style} from './InputKeyStyle'

interface IinputKey{
    pass:string
}

export function InputKey(props:IinputKey){
    return(
        <TextInput value={props.pass} style={style.container} editable={false} placeholder="PASS" />
    )
}