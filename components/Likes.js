import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Likes extends Component {

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

    render() {
        const { foto, likeCallBack } = this.props;
        return (
            <View>
                <TouchableOpacity 
                    onPress={ () => {likeCallBack(foto.id)} }>                    
                    <Image source={this.carregaIcone(foto.likeada)} 
                        style={styles.botaoDeLike} />                        
                </TouchableOpacity>

                { this.exibeLikes(foto.likers) }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    botaoDeLike: {
        marginBottom: 10,
        height: 40,
        width: 40
    },
    likes: {
        fontWeight: 'bold'
    }
  });

            