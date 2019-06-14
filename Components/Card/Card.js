import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
            {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        borderRadius:2,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        borderColor:"#000",
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop:10
    }
})