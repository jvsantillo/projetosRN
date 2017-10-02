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
        <Text>this.props.prop1</Text>
        <Text>this.props.prop2</Text>
        <Text>this.props.prop3</Text>
      </View> 

    );
  }
}

class app3 extends Component {
  render() {
   return(
    
    <ComponentePersonalizado prop1 = "bla" prop2 = "ble" prop3 = "bleu"></ComponentePersonalizado>

   );
  }
}

AppRegistry.registerComponent('ComponentePersonalizado', () => ComponentePersonalizado);
AppRegistry.registerComponent('app3', () => app3);
