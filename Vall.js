import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text } from 'react-native';
import Collapsible from 'react-native-collapsible';

const ipcim="192.168.1.67";

export default class Vall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      isCollapsed:true,
      megnyomva:[]
    };
  }



  componentDidMount(){
    return fetch('http://'+ipcim+':3000/Vall')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

          
          
let m=this.state.megnyomva;
for (let elem of this.state.dataSource)
    m[elem.kepek_id]=true
this.setState({megnyomva:m})  


        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  kattintas=(sorszam)=>{
    //alert(sorszam)
    let m=this.state.megnyomva
    m[sorszam]=!m[sorszam]
    this.setState({megnyomva:m})
  }


  render() {
    return (
      <View style={{flex: 1, paddingTop:20}}>
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => 
        <View >

        
          <TouchableOpacity
        onPress={()=>this.kattintas(item.kepek_id)}
        >

        <Image  source={{uri: 'http://'+ipcim+':3000/'+item.kepek}} style={{height:300, width:400, marginBottom:20}} />
          
        </TouchableOpacity>

        <Collapsible collapsed={this.state.megnyomva[item.kepek_id]}>
      <Text style={{padding: 10, fontSize: 12, textAlign:'justify'}}>
          {item.kepek_leiras}
        </Text>
  </Collapsible>
            
        </View>
      
      }
        keyExtractor={({izomcsoport_id}, index) => izomcsoport_id}
      />


    </View>
    );
  }
}