import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        width: 150,
        backgroundColor: "#fff",
        borderRadius: 10,
        height:30,
        display: "flex",
        justifyContent:'center',
        alignItems:'center',
        elevation: 5,
    },
    text:{
        fontWeight: "bold",
        textTransform: "uppercase"
    }
})