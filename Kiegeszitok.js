import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text, Button,navigation } from 'react-native';

const ipcim="192.168.1.67";



export default class Mell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      isCollapsed:true,
      megnyomva:[]
    };
  }


  componentDidMount(){
    return fetch('http://'+ipcim+':3000/etrend_tipus')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

          
          
let m=this.state.megnyomva;
for (let elem of this.state.dataSource)
    m[elem.etrend_id]=true
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

      <View>
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => 
         <View>
      <Text style={{textAlign:'center'}}>{item.etrend_tipus_nev}</Text>
          
      <Text style={{padding: 10, fontSize: 20, textAlign:'center'}}>
          {item.kiegeszitok_nev}
        </Text><Text style={{padding: 10, fontSize: 16, textAlign:'justify'}}>
          {item.kiegeszitok_leiras}
        </Text>
  
      </View>
      }
        keyExtractor={({etrend_tipus_id}, index) => etrend_tipus_id}
      />

    </View>
  );
  }
}