import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';

export default class Fooldal extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoading:true,
        isCollapsed:true,
        dataSource:[],
        megnyomva:[]
        
      };
  }

render() {  
  return (
    <ImageBackground source={require("./pexels-anush-gorak-1229356.jpg")}
    style={{
      flex: 1,
      width: null,
      height: null,}}>
      
    </ImageBackground>
    );
  }
}
