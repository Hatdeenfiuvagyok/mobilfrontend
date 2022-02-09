import React, { Component } from 'react';
import { Button, View, Text, SafeAreaView, } from 'react-native';


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
      <Text>Főoldal</Text>
   // <SafeAreaView style={{ flex: 1 }}>
    //<View>
     // <View>
      //  <Button
       //   onPress={() => navigation.navigate('Kiegeszitok')}
       //   title="Kiegeszitok"
       // />
     // </View>
   // </View>
 // </SafeAreaView>
);
}
}
