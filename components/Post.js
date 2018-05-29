import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: {...this.props.foto, likers: [{}]}
        }
    }

    like() {
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
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
            <Text style={style.likes}> 
                {likers.length} {likers.length > 1 ? 'curtidas': 'curtida'}
            </Text>
        );
    }

    exibeLegenda(foto) {
        if(foto.comentario == '')
            return;
            
        return (
            <View style={style.comentario}>
                <Text style={style.tituloComentario}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View>
        );
    }

    render() {
        const { foto } = this.state;
        return (
            <View>
                <View style={style.cabecalho}>
                <Image source={{uri: foto.urlPerfil}}
                    style={style.fotoDePerfil}
                />
                <Text>{foto.loginUsuario}</Text>
                </View>            
                <Image source={{uri: foto.urlFoto}}
                    style={style.foto}/>

                <View style={style.rodape}>
                    <TouchableOpacity 
                        onPress={this.like.bind(this)}>                    
                        <Image source={this.carregaIcone(foto.likeada)} 
                            style={style.botaoDeLike} />                        
                    </TouchableOpacity>

                    { this.exibeLikes(foto.likers) }
                    
                    { this.exibeLegenda(foto) }
                    
                 </View>
            </View>
        );
    }
}

const style = StyleSheet.create({    
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