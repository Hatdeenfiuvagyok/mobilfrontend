import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class Fooldal extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <Text style={{fontSize:20, textAlign:'center', paddingTop:15}}>
        Főoldal
      </Text>
    );
  }
}