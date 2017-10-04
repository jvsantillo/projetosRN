import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const Estilo = {
  
  principal: {
    backgroundColor: '#D4D2D5',
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  
  estiloBotao: {
    
    backgroundColor: '#342E37',
    borderColor: '#FAFFFD',
    borderWidth: 2,
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOffset: {width:2, height:0},
    shadowOpacity: 0.4, 
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 10, 
    paddingHorizontal: 30
    
  }
}

class ComponentePersonalizado extends Component {
  
  render() {
    return(      
      <View>
        <Text>{this.props.prop1}</Text>
      </View> 

    );
  }
}

const botaoApertado =  () =>  {
   alert("O botão foi apertado");
}


class app3 extends Component {
  constructor(props) {
    super(props);

    this.state = { texto: "Texto padrão"}
  }

  render() {
   return(
    <View style = {Estilo.principal}>
        <Button onPress = {botaoApertado} label = "Toque para mudar o texto"></Button>
        <ComponentePersonalizado prop1 = {this.state.texto} ></ComponentePersonalizado>
    </View>

   );
  }
}

AppRegistry.registerComponent('app3', () => app3);
