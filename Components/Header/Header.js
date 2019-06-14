import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{props.headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f0f0f0",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.9,
        height:60,
        borderBottomWidth: 2,
        borderBottomColor:"gray" ,
    },
    heading:{
        fontSize:20
    }
})



export default Header