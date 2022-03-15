import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity, FlatList, RefreshControl  } from 'react-native';
import Bevitel from './Bevitel';

      //172.16.0.110
      //192.168.1.67
      //172.16.0.102
const ipcim="192.168.1.67";

export default class Megjegyzesek extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nev: '',
        komment:"",

        dataSource:[]

    };
  }
  
  componentDidMount(){
    return fetch('http://'+ipcim+':3000/tema')
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




  ujratoltes=()=>{
    //alert(szam)
    this.setState({})

    return fetch('http://'+ipcim+':3000/tema')
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

        <View style={{margin:10}}>

        <Bevitel tema_bevitel={this.state.tema}  frissit={()=>this.ujratoltes()}  />

        <Text style={{fontSize:30, textAlign:'center', marginTop:25}}>Megjegyzések</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{backgroundColor:'rgb(212, 212, 212)',borderBottomLeftRadius:15,borderBottomRightRadius:15,width:'100%',alignSelf:'center', borderColor:'black', borderBottomWidth:2,borderBottomWidth:'100%', borderStyle:'solid', marginBottom:10}}>

          <Text style={{color:'darkblue',fontSize:18,marginTop:5, marginLeft:10}}>
          {item.uzenet_nev} </Text>
          <Text style={{color:"black",fontSize:20,marginLeft:10}}>
          {item.uzenet_szoveg} </Text>
          <Text style={{color:"black",fontSize:12, textAlign:'right',marginRight:10}}>
          {item.uzenet_datum} </Text>
     
          
   
          </View>
        
        }
    
          keyExtractor={({uzenet_id}, index) => uzenet_id}
        />
    </View>
    );
  }
}