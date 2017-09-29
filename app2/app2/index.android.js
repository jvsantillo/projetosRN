import React from 'react';
import {View, Text, AppRegistry, Button } from 'react-native';

const App = () => {
  return(
    <View>
      <Text>
        app2
      </Text>
    </View>
  );  
};

AppRegistry.registerComponent('app2', () => App);