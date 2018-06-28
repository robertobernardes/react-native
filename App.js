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

    like(idFoto) {
        const  foto = this.state.fotos.find(foto => foto.id === idFoto);
        
        let novaLista = [];
        if(!foto.likeada) {
            novaLista = [
                ...foto.likers,
                {login: 'meuUsuario'}
            ];
        } else {
            novaLista = foto.likers.filter(liker => {
                return liker.login !== 'meuUsuario'
            })
        }
        const fotoAtualizada = {
            ...foto,
            likeada: !foto.likeada,
            likers: novaLista
        }

        const fotos  = this.state.fotos.map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto);

        this.setState({fotos: fotos});
    }

    adicionaComentario(idFoto, valorComentario, inputComentario) {
        if (valorComentario === '')
            return;

        const foto = this.state.fotos.find(foto => foto.id === idFoto);

        const novaLista = [
            ...foto.comentarios, 
            {
                id: this.state.valorComentario,
                login: 'meuUsuario',
                texto: valorComentario
            }
        ];

        const fotoAtualizada = {
            ...foto,
            comentarios: novaLista
        }

        const fotos  = this.state.fotos.map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada : foto);

        this.setState({fotos});
        inputComentario.clear();
    } 

    render() {
        return (
        <FlatList
            keyExtractor={item => String(item.id)}
            data={this.state.fotos}
            renderItem={({item}) =>
                <Post 
                    foto={item} 
                    likeCallBack={this.like.bind(this)}
                    comentarioCallBack = {this.adicionaComentario.bind(this)}
                />
            }
        />
        );
    }
}