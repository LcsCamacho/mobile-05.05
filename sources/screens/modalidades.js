import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import cursos_mock from '../mock/mock_cursos'
import Modalidade from '../components/modalidade';
const { width, height } = Dimensions.get('screen');


export default function Modalidades({ navigation, route }) {

  const abrirpagina = (dados) => {
    navigation.navigate('cursos', { dados });
  }

  return (


    <View style={styles.container}>

      <View style={styles.header}>
        <Image style={styles.img} source={require("../../assets/logo.png")} />
      </View>
      
      <FlatList
        data={cursos_mock}
        renderItem={({ item }) => <Modalidade data={item} navigation={abrirpagina}/>}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    position: 'relative',
  },
  header: {
    width: width,
    height: height * 0.1,
    borderBottomColor: '#d9d8d7',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  img: {
    width: 180,
    height: 100
  },
  imagens: {
    width: '100%',
    height: 200
  },
  text: {
    fontSize: 20
  },
  cai: {
    width: width * 0.9,
    height: 100,
    backgroundColor: "#d9d8d7",
    marginTop: 20
  },
});
