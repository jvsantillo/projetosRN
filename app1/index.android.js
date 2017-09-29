import React from 'react';
import {Text, AppRegistry, Button, View} from 'react-native';


const geraNumeroAleatorio = () => {
    var num = Math.random()*100;
    alert(Math.round(num));
}

const App = () =>{
  
  return(  
  <View>
      <Text>Gerador de números randômicos </Text>
      <Button 
            title = "Gerar número aleatório"
            onPress = {geraNumeroAleatorio}
      />
  </View>
  );
}; //arrow function
  
AppRegistry.registerComponent('app1', () => App);
