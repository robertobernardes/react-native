import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';

import InputComentario from './InputComentario';

const width = Dimensions.get('screen').width;

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto
        }
    }

    like() {
        const { foto } = this.state;
        
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
        };
        this.setState({foto: fotoAtualizada});
    }

    carregaIcone(likeada) {
        return likeada ? require('../assets/img/s2-checked.png') : require('../assets/img/s2.png');
    }

    exibeLikes(likers) {
        if(likers.length <= 0)
            return;

        return (
            <Text style={styles.likes}> 
                {likers.length} {likers.length > 1 ? 'curtidas': 'curtida'}
            </Text>
        );
    }

    exibeLegenda(foto) {
        if(foto.comentario == '')
            return;
            
        return (
            <View style={styles.comentario}>
                <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View>
        );
    }

    adicionaComentario(valorComentario, inputComentario) {
        if (valorComentario === '')
            return;

        const novaLista = [
            ...this.state.foto.comentarios, 
            {
                id: this.state.valorComentario,
                login: 'meuUsuario',
                texto: valorComentario
            }
        ];

        const fotoAtualizada = {
            ...this.state.foto,
            comentarios: novaLista
        }

        this.setState({foto: fotoAtualizada});
        inputComentario.clear();
    }   

    render() {
        const { foto } = this.state;
        return (
            <View>
                <View style={styles.cabecalho}>
                <Image source={{uri: foto.urlPerfil}}
                    style={styles.fotoDePerfil}
                />
                <Text>{foto.loginUsuario}</Text>
                </View>            
                <Image source={{uri: foto.urlFoto}}
                    style={styles.foto}/>

                <View style={styles.rodape}>
                    <TouchableOpacity 
                        onPress={this.like.bind(this)}>                    
                        <Image source={this.carregaIcone(foto.likeada)} 
                            style={styles.botaoDeLike} />                        
                    </TouchableOpacity>

                    { this.exibeLikes(foto.likers) }
                    
                    { this.exibeLegenda(foto) }
                    
                    {foto.comentarios.map(comentario => 
                        <View style={styles.comentario} key={comentario.id}>
                            <Text style={styles.tituloComentario}>{comentario.login}</Text>
                            <Text>{comentario.texto}</Text>
                        </View>
                    )}

                    <InputComentario 
                        comentarioCallBack={this.adicionaComentario.bind(this)}
                    />
                 </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({    
    cabecalho: { 
      margin: 10, 
      flexDirection: 'row', 
      alignItems: 'center'
    },
    fotoDePerfil: {
      marginRight: 10, 
      borderRadius: 20, 
      width: 40, 
      height: 40
    },
    foto: {
      width: width, 
      height: width
    },
    botaoDeLike: {
        marginBottom: 10,
        height: 40,
        width: 40
    },
    rodape: {
        margin: 10
    },
    likes: {
        fontWeight: 'bold'
    },
    comentario: {
        flexDirection: 'row'
    },
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    }
  });