import React, { Component } from 'react'
import { Text, View ,StyleSheet ,Image } from 'react-native'
import Card from "../Card/Card"
import CardSection from "../Card/CardSection"
export default class AlbumDetail extends Component {
    render() {
        const {details} = this.props
        return (
            <View>
                <Card>
                <CardSection style={styles.headerComplete}>
                <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.thumbnailStyle} source={{uri:details.thumbnail_image}} />
                </View>
                <View style={styles.headerContentText}>
                <Text style={styles.headerStyle}>{details.title}</Text>
                <Text>{details.artist}</Text>
                </View>
                </CardSection>

                <CardSection>
                <Image style={styles.imageStyle} source={{uri:details.image}} />
                </CardSection>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContentText:{
        flexDirection:"column",
        justifyContent:"space-around"
    },
    headerComplete:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    thumbnailStyle:{
        height:50,
        width: 50
    },
    headerStyle:{
        fontSize:18
    },
    thumbnailContainerStyle:{
        justifyContent:"center",
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    imageStyle:{
        height:300,
        width:null,
        flex: 1
    }
})
