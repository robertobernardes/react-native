import React, { Component } from 'react'
import { View, Button, Text, StyleSheet, Dimensions, TextInput } from 'react-native'

import { login } from '../../api/auth'

const width = Dimensions.get('screen').width;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
     this.state = {
        usuario: '',
        senha: '',
        mensagem: ''
    }
  }
  
  async onLogin() {    
    await login(this.state.usuario, this.state.senha, this.loginRetorno);   
  }
  
  loginRetorno = (retorno) => {    
    if(retorno == 'true')
      this.props.navigation.navigate('Dashboard');
    else
      this.setState({mensagem: retorno})
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.titulo}> Instalura </Text>
          <View style={styles.form}>
              <TextInput style={styles.input}
                  placeholder="Usuário..."
                  onChangeText={texto => this.setState({usuario: texto})}
                  autoCapitalize="none"
                  underlineColorAndroid="transparent"
              />
              <TextInput style={styles.input}
                  placeholder="Senha..."
                  onChangeText={texto => this.setState({senha: texto})}
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
              />
              <Button title="Login" onPress={this.onLogin.bind(this)} />
          </View>
          <Text style={styles.mensagem}> 
              {this.state.mensagem}
          </Text>
      </View>
    );
  }
}

/*
const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
*/
const styles = StyleSheet.create({    
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
     
  },
  titulo: {
      fontWeight: 'bold',
      fontSize: 26
  },
  form: {
      width: width * 0.8
  },
  input: {
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd'
  },
  mensagem: {
      marginTop: 15,
      color: '#e74c3c'
  }
})