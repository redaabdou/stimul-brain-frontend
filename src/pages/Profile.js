import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import { Divider, Text } from 'react-native-elements'
import Layout from '../components/Layout'
import * as Font from 'expo-font';



class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("../images/stimul.jpeg")} style={styles.image} />
        </View>
        <Text h4 style={styles.name}>
          {"Reda Abdou"}
        </Text>
        <Text style={styles.desc}>Data scientist à Ankaa Corp</Text>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>
          J’ai envie d'entrainer ma memoire, mon raisonement et de construire ma culture personnelle avec S(t)imlBrain.
        </Text>
        <Divider style={styles.divider} />
        <Text h4 style={styles.name}>
          {"Statistiques"}
        </Text>
        <Text style={styles.desc}>Rapidité : 85 %</Text>
        <Text style={styles.desc}>Memoire : 92 %</Text>
        <Text style={styles.desc}>Raisonement : 78 %</Text>
        <Text style={styles.desc}>Calcule mental : 88 %</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 20,
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
})

export default ProfileScreen