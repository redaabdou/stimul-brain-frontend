import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';
import GamesItem from '../components/GamesItem';
import * as Font from 'expo-font';

export default class Games extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news_items: [
                {
                    pretext: 'Ameliorer sa memoire',
                    title: 'Jeux des cartes chachés',
                    summary: 'But : retrouver les paires d’éléments (nombres, lettres, figure, etc) Fonctions stimulées : capacités de mémorisation, mémoire épisodique',
                    image: require('../images/pink.jpg'),
                    url: 'MemoryGame',
                },
                {
                    pretext: 'Ameliorer son calcule mental',
                    title: 'jeux de calcule',
                    summary: 'But : Resoudre des opretations mathématiques mentalement et rapidement.',
                    image: require('../images/beach.jpg'),
                    url: 'Mindgame',
                },
                {
                    pretext: 'Ameliorer son raisonement',
                    title: 'Rock Paper Scissors',
                    summary: 'But : Battre la machine tout en construisant une stratégie de jeu',
                    image: require('../images/rails.jpg'),
                    url: 'RockPaperScissors',
                },

            ]
        };
    }

    press() {

    }

    renderNews() {

        return this.state.news_items.map((news, index) => {

            return <GamesItem key={index} index={index} news={news} />
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.back_button}>
                        <Image style={styles.image} source={require("../images/favicon.png")} />
                    </View>

                    <View style={styles.header_text}>
                        <Text style={styles.header_text_label}>A la une pour cette semaine</Text>
                    </View>
                    <View style={styles.whitespace}></View>
                </View>

                <View style={styles.instruction}>
                    <Text style={styles.instruction_text}>A vous de jouer</Text>
                </View>

                <ScrollView style={styles.news_container}>
                    {this.renderNews()}
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        padding: 20,
        justifyContent: 'space-between',
        borderBottomColor: '#E1E1E1',
        borderBottomWidth: 1
    },
    header_button: {
        flex: 1,
    },
    whitespace: {
        flex: 1
    },
    back_button: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    back_button_label: {
        color: '#397CA9',
        fontSize: 20,
    },
    instruction: {
        alignSelf: 'center',
        marginTop: 5
    },
    instruction_text: {
        color: '#A3A3A3'
    },
    header_text: {
        flex: 1,
        alignSelf: 'center'
    },
    header_text_label: {
        fontSize: 20,
        textAlign: 'center'
    },
    news_container: {
        flex: 1,
        flexDirection: 'column'
    },
});