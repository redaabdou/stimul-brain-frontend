import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';
import NewsItem from '../components/NewsItem';
import * as Font from 'expo-font';

export default class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news_items: [
                {
                    pretext: 'Begeek.fr',
                    title: 'Trois compétences à développer',
                    summary: 'Des chercheurs développent 3 jeux gratuits pour améliorer ses compétences cognitives',
                    image: require('../images/pink.jpg'),
                    url: 'https://www.begeek.fr/des-chercheurs-developpent-3-jeux-gratuits-pour-ameliorer-ses-competences-cognitives-334827',
                },
                {
                    pretext: 'Hellocare.com',
                    title: ' Booster la mémoire',
                    summary: 'Le cerveau est un muscle qu’il est nécessaire de maintenir en forme, un peu comme le reste du corps',
                    image: require('../images/beach.jpg'),
                    url: 'https://hellocare.com/blog/jeux-de-memoire-idees/#:~:text=Mots%20crois%C3%A9s%2C%20Sudoku%20et%20autres,d%27am%C3%A9liorer%20les%20capacit%C3%A9s%20cognitives',
                },
                {
                    pretext: 'mnpaf.fr',
                    title: 'Développant ses capacités cognitives',
                    summary: "Les jeux font tous travailler au moins la mémoire à court terme et la mémoire de travail, mais aussi l'attention et la concentration",
                    image: require('../images/rails.jpg'),
                    url: 'https://www.mnpaf.fr/preserver-memoire/les-jeux',
                },

            ]
        };
    }

    press() {

    }

    renderNews() {

        return this.state.news_items.map((news, index) => {

            return <NewsItem key={index} index={index} news={news} />
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
                    <Text style={styles.instruction_text}>Bonne lecture</Text>
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