import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text, Button,navigation } from 'react-native';
import Collapsible from 'react-native-collapsible';

const ipcim="192.168.1.67";



export default class Kiegeszitok extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoading:true,
        isCollapsed:true,
        dataSource:[],
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
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
        
      <View>
      <FlatList
        data={this.state.dataSource}
        renderItem={({item}) => 
        
      <Text>{item.etrend_tipus_nev}</Text>
      }
        keyExtractor={({etrend_tipus_id}, index) => etrend_tipus_id}
      />

    </View>
  );
  }
}