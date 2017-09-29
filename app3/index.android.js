import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ComponentePersonalizado extends Component {
  render() {
    return(

      <View>
        <Text>Primeiro</Text>
        <Text>Segundo</Text>
      </View> 

    );
  }
}

class app3 extends Component {
  render() {
   return(
    
    <ComponentePersonalizado></ComponentePersonalizado>

   );
  }
}

AppRegistry.registerComponent('ComponentePersonalizado', () => ComponentePersonalizado);
AppRegistry.registerComponent('app3', () => app3);
