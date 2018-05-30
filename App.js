import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,  
  FlatList
} from 'react-native';

import Post from './components/Post';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
        .then(resposta => resposta.json())
        .then(json => this.setState({fotos: json}));
  }

  render() {
    return (
      <FlatList style={style.container}
        keyExtractor={item => String(item.id)}
        data={this.state.fotos}
        renderItem={({item}) =>
          <Post foto={item} />
        }
      />
    );
  }
}

const margem = Platform.OS === 'ios' ? 20 : 0;
const style = StyleSheet.create({
  container: { 
    marginTop: margem
  },
});