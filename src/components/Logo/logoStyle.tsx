import { StyleSheet } from "react-native";

export const style = StyleSheet.create(
    {
        container :{
            display: "flex",
            flexDirection: 'column',
            borderColor: "#ffffff",
            borderStyle: 'solid',
            borderTopWidth: 3,
            borderBottomWidth: 3,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'silver',
            width: '100%',
            height: 250,
        },
        
        img:{
            height: 200,
            width: '100%',
            resizeMode: "contain"
        },
        
        title :{
            color: "#977d0a",
            fontWeight: "bold",
            fontSize: 25,
            letterSpacing: 2,
        }
    }
)