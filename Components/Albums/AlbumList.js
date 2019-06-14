import React, { Component } from 'react'
import { Text, View , ActivityIndicator} from 'react-native'
import axios from "axios"
import AlbumDetail from "./AlbumDetail"

export default class AlbumList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loading:false,
             data:null
        }
    }
    componentWillMount(){
        this.setState({loading:true})
        console.log("working2")
        axios.get("http://rallycoding.herokuapp.com/api/music_albums")
        .then(obj=>{
            this.setState({data:obj.data,loading:false})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        console.log("working")
        const {loading,data} = this.state;
        let view;
        if(loading){
            view=<ActivityIndicator size="small" color="#0000ff"/>
        }else{
            view=data.map((obj,i)=>{
                return <AlbumDetail key={i} details={obj}/>
            })
        }

        return (
            <View>
                <Text> AlbumLsit </Text>
                {view}
            </View>
        )
    }
}
