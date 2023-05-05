import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, Linking, TouchableOpacity, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('screen');


export default function urso({ data }) {
  const { nome, modalidade, detalhes } = data.dados;
  const { 
    site, 
    localidade, 
    endereco, 
    telefone, 
    email,
    cargaHoraria,
    requisitos,
    objetivo,
    conteudo, 
  } = detalhes;
  console.log({detalhes})
  const handlePress = () => {
    Linking.openURL(site);
  };
// data :  localidade: 'São José do Rio Preto',
// endereco: 'Rua Jorge Tibiriçá, 3.671 - Santa Cruz - São José do Rio Preto/SP',
// telefone: '(17) 3224-8550',
// email: 'senaisp@senai.com.br',
// cargaHoraria: '40 horas',
// requisitos: 'Ter no mínimo 16 anos e ter concluído o 5º ano do Ensino Fundamental.',
// objetivo: 'O curso de Aperfeiçoamento Profissional Automação Hidráulica Industrial tem por objetivo o desenvolvimento de competências relativas à automação hidráulica industrial, por meio de estudos de conceitos, princípios e aplicações.',
// conteudo: `Conceitos de hidráulica industrial. Componentes hidráulicos. 
// Válvulas direcionais. 
// Válvulas de bloqueio. Válvulas de controle de vazão. 
// Válvulas de controle de pressão. Válvulas de sequência. 
// Válvulas de retenção. Válvulas de alívio. 
// Válvulas de contrabalanço. 
// Válvulas de retenção pilotada. 
// Válvulas de contrabalanço pilotada.

  console.log({ data })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.detalheDescricao}>{nome}</Text>
      </View>

      <View style={styles.detalhes}>
        <Text style={styles.detalheTitle}>Modalidade: <Text style={styles.detalheDescricao}>{modalidade}</Text></Text>
        <Text style={styles.detalheTitle}>Localidade: <Text style={styles.detalheDescricao}>{localidade}</Text></Text>
        <Text style={styles.detalheTitle}>Endereço: <Text style={styles.detalheDescricao}>{endereco}</Text></Text>
        <Text style={styles.detalheTitle}>Telefone: <Text style={styles.detalheDescricao}>{telefone}</Text></Text>
        <Text style={styles.detalheTitle}>Email: <Text style={styles.detalheDescricao}>{email}</Text></Text>
        <Text style={styles.detalheTitle}>Carga Horária: <Text style={styles.detalheDescricao}>{cargaHoraria}</Text></Text>
        <Text style={styles.detalheTitle}>Requisitos: <Text style={styles.detalheDescricao}>{requisitos}</Text></Text>
        <Text style={styles.detalheTitle}>Objetivo: <Text style={styles.detalheDescricao}>{objetivo}</Text></Text>


        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text>Visitar site</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    paddingTop: 20,
  },
  header: {
    height: 30,
    paddingHorizontal: 5,
  },
  detalhes: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 5,
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    width: width,
    height: height,
  },
  scrollView: {
    flex: 1,
    width: width,
    height: 'auto',
    paddingHorizontal: 20,
  },
  detalheTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  detalheDescricao: {
    fontWeight: 'normal',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#d9d8d7',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',

  }

})