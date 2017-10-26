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



class app3 extends Component {

  constructor(props){
    super(props);

    this.state = {opcaoJogador : "", opcaoComputador: "", resultado: ""}
  }

  jokenpo(opcaoJogador){
    this.setState({opcaoJogador : opcaoJogador})
    this.escolhaComputador();
  }

  escolhaComputador(){
    var numero = Math.random()*10;
    numero = Math.floor(numero);
    if(numero < 3){
      this.setState({opcaoComputador : "Pedra" });
    } else if (numero >= 3 && numero < 7){
      this.setState({opcaoComputador : "Tesoura" });
    } else if(numero >= 7 && numero < 9){
      this.setState({opcaoComputador : "Papel" });
    }
    
  }

  definirResultado(){
    if(this.state.opcaoComputador == this.state.opcaoJogador){
        this.setState({resultado: "Empate"}) 
    } else if((this.state.opcaoComputador == "Pedra" && this.state.opcaoJogador == "Papel") ||
               (this.state.opcaoComputador == "Papel" && this.state.opcaoJogador == "Tesoura") ||
               (this.state.opcaoComputador == "Tesoura" && this.state.opcaoJogador == "Pedra")){ 
                 this.setState({resultado: "Vitória do usuário"})
             
               }else //if((this.state.opcaoComputador == "Papel" && this.state.opcaoJogador == "Pedra") ||
                //(this.state.opcaoComputador == "Tesoura" && this.state.opcaoJogador == "Papel") ||
                //(this.state.opcaoComputador == "Pedra" && this.state.opcaoJogador == "Tesoura"))
                { 
                  
                    this.setState({resultado: "Vitória do computador"}) 

                }                                                                              
    }

  render(){
   return(
    <View style = {Estilo.principal}>
        <Text>Escolha do computador: {this.state.opcaoComputador}</Text>
        <Text>Escolha do usuário: {this.state.opcaoJogador}</Text>
        <Text>Resultado: {this.state.resultado}</Text>
        
        <Button title = "Pedra"
                onPress = {() => {this.jokenpo("Pedra")}}
        />
        <Button title = "Papel"
                onPress = {() => {this.jokenpo("Papel")}}
        />
        <Button title = "Tesoura"
                onPress = {() => {this.jokenpo("Tesoura")}}
        />
        <Button title = "Definir resultado"
                onPress = { () => {this.definirResultado()}}
        />
    </View>
   );
  }
}

AppRegistry.registerComponent("app3", () => app3);
