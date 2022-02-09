import React, { Component } from 'react';
import {Text, View, Image, ScrollView } from 'react-native';

const ipcim="172.16.0.111";

export default class Touchables extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    return fetch('http://'+ipcim+':3000/animek')
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
      
      <View style={styles.container}>
        <Image  source={{uri:'http://'+ipcim+':3000/'+this.props.route.params.aktid+'.jpg'}}   style={{ width:225, height:314 ,marginLeft:"auto",marginRight:"auto", borderRadius:10}} /> 
        
          <Text>Leírás:</Text>
          <ScrollView>
             <Text style={{color:"black",fontSize:20,textAlign:"center",marginBottom:5}}   >  {this.props.route.params.aktleiras}  </Text>
             <Text></Text>
          </ScrollView>
          <Text></Text>
      </View>
       
    );
    
  }
}