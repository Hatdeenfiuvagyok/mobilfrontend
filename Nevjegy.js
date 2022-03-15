import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text  } from 'react-native';

export default class Nevjegy extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <View style={{ padding:20}}>
        <Text style={{fontSize:20, marginBottom:10}}>
              Kapcsolat
        </Text>
        <Text>
          Telefonszám: 06/20 269-8660
        </Text>
        <Text>
          Email: ug.daviid@gmail.com
        </Text>
    </View>
    );
  }
}