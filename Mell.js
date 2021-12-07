import React, { Component } from 'react';
import { Text, TextInput, View, Image, FlatList, TouchableOpacity } from 'react-native';

export default class Mell extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  
onPress=()=>{
  alert("Pressed the picture")
}



  componentDidMount(){
    return fetch('http://172.16.0.199:3000/Mell')
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
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View >

            
        <TouchableOpacity style={{width:400, marginLeft:"auto",marginRight:"auto"}}
          onPress={this.onPress}>
              <Image  source={{uri: 'http://172.16.0.199:3000/'+item.kepek}} style={{height:300, width:400, marginBottom:20}} />
        </TouchableOpacity>
          </View>
        
        }

        
          keyExtractor={({izomcsoport_id}, index) => izomcsoport_id}
        />
      </View>
    );
  }
}