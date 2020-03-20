import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component{
  constructor (props){
    super (props);
      this.state = {
      numero: []
    }
  }

  gerarNumeros(){
    let repete = [];
    for(var i = 1; i <= 6; i++){
      repete.push(Math.floor(Math.random() * 60) + "," );
    }
    this.numerosRepetidos(repete);
  }

  numerosRepetidos(array){
    for(var varA = 1; varA < array.length; varA++){
      let existe = array.indexOf(array[varA], varA+1)
      if(existe != -1 || array[varA] == 0){
        array[varA] = Math.floor(Math.random() * 60) + "," ;
      }
    }

    this.setState({
      number: array
    })
  }


  render (){
    return (
      <View style={styles.container}>
		<Text style={styles.text}> Gerador de Números : </Text>
        <Button title="Gerar numeros" onPress={() => {this.gerarNumeros()}}/>
        <Text style={styles.text}> Números Gerados : </Text>
        <Text style={styles.result}>{this.state.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
	flex:1,
	alignItems: 'center',
	
  },
  text:{
	  fontSize: 20,
  }
  
  
});